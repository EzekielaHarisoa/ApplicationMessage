import pool from "../config/db.js"

export const createMessage= async(req , res)=>{
    const {contenue,iduser}=req.body;
    const result=pool.query("INSERT INTO messages(contenue,dateenvoye,iduser) values ($1,NOW(),$2)",[contenue,iduser]);
    try {
       res.status(201).json(result.row[0]);
    } catch (error) {
        res.status(500).json("erreur interne du serveur ",error)
    }
}