import pool from "../config/db.js";
import bcrypt from "bcrypt" 
import jwt from "jsonwebtoken";

export const register=async (req , res)=>{
    const {nom,email,password}=req.body;
    try {
        if(!nom||!email ||!password) return res.status(400).json("tout les champs sont obligatoires");

        const existingUser=  pool.query("SELECT * FROM utilisateur WHERE email =$1",[email]);
        if ((await existingUser).rows.length>0)return res.status(409).json("email deja prise");

        const hashPass= await bcrypt.hash(password,10);
        const result=await pool.query("INSERT INTO utilisateur(nom,email,motPass) VALUES($1,$2,$3) RETURNING*",[nom,email,hashPass])
        
        if(!res)return res.status(401).json("erreur de requette d'insertion");
        res.status(200).json("Inscription reussi"+ result.rows);

        } catch (error) {
        res.status(500).json("erreur interne du serveur"+ error);
    }
}

export const login=async(req,res)=>{
    try {
 
        const {email,password}=req.body;
        if(!email||!password )return res.status(401).json("les deux champs sont obligatoires");
        const userResult= await pool.query("SELECT * FROM utilisateur WHERE email=$1",[email]);

        if(userResult.rows.length===0)return res.status(404).json("utilisateur introuvable");
        const user=userResult.rows[0];
  
        const validatePass= await bcrypt.compare(password, user.motPass);
        if(!validatePass)return res.status(401).json("mot de pass incorrect");

        const token= jwt.sign({
                id:user.id,
                email:user.email
            },
             process.env.JWT_SECRET,
            {expiresIn:"1h"}

        );
        console.log("Body reçu:", req.body);
        console.log("Utilisateur trouvé:", user);

        res.status(201).json({
            message:"Connexion reussi",
            token:token,
            utilisateur:{
                id:user.id,
                nom:user.nom,
                email:user.email
            }
        } );

    } catch (error) {
       res.status(500).json("erreur interne du serveur" +error) 
    }
}