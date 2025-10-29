import pool from "../config/db"

export const createPub=async(req,res)=>{
try {
  const {title, description}=req.body;
  if(!title) return res.send(401).json("Le titre est obligatoire");
  const result= await pool.query("INSERT INTO publication(title,description) VALUES ($1,$2) RETURNING *");
  if(result.rowCount===0){
    res.status(401).json("erreur de requette de creation de pub");
  }
  res.status(201).json("publication creer avec succes");

} catch (error) {
    
}
}