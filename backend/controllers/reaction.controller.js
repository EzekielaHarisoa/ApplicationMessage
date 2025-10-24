import pool from "../config/db";

export const ajoutReaction= async(req ,res)=>{
    const {idMess}=req.params;
    const {idUser,type}=req.body;
    try {
        const result=await  pool.query("INSERT INTO reations( idMess, idUser, type) values ($1,$2,$3) RETURNING* ", [idMess, idUser,type])
    } catch (error) {
        
    }
}