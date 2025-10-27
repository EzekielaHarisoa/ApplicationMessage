import pool from "../config/db.js";
export const voirReaction= async(req,res)=>{
    const {id}=req.params;
    try {
        const result= await pool.query("SELECT type, COUNT(*) AS count FROM reactions WHERE idMessage=$1 GROUP BY type",[id]);
        // if(result.rowCount===0){
        //     res.status(401).json("message introuvable ou Erreur de requette reaction");
        // }
        res.status(201).json({
            messsage:"tout les reactions",
            reaction:result.rows
        })
    } catch (error) {
        res.status(500).json("Erreur interne du serveur" + error);
        
    }
}

export const ajoutReaction= async(req ,res)=>{
    const {idMess}=req.params;
    const {idUser,type}=req.body;
    try {
        const result=await  pool.query("INSERT INTO reactions( idmessage, iduser, type) values ($1,$2,$3) RETURNING* ", [idMess, idUser,type]);
        if(result.rowCount===0){
            res.status(402).json("Erreur de requette de creation de reaction");
        }
        res.status(201).json({
            messsage:"creation reaction reussi",
            reaction:result.rows[0]
        })
    } catch (error) {
        res.status(500).json("Erreur interne du serveur" + error);
    }
}

export const deleteReaction= async(req , res)=>{
    const {id}=req.params;
    const {idUser,type}=req.body;
    try {
        const result=await pool.query("DELETE  FROM  reactions  WHERE id=$1 AND idUser =$2 AND type=$3",[id,idUser,type]);
         if(result.rowCount===0){
            res.status(402).json(" Message introuvable ou Erreur de requette de la suppression de reaction");
        }
        res.status(200).json({
            messsage:"suppression reaction reussi",
            reaction:result.rows[0]
        })
    } catch (error) {
        res.status(500).json("Erreur interne du serveur" + error);
        
    }

}