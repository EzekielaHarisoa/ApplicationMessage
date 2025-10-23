import pool from "../config/db.js"

export const createMessage= async(req , res)=>{
    const {contenue}=req.body;
    const iduser=req.params.id;
    const result= await pool.query("INSERT INTO messages(contenue,dateenvoye,iduser) values ($1,NOW(),$2) RETURNING *",[contenue,iduser]);
    try {
    if(!contenue || ! iduser) return res.status(400).json("tout les champs sont obligatoires");    
    if(!result )return res.status(401).json("erreur de requette d'insertion");

    res.status(201).json({
      message: "Message ajouté avec succès",
      data: result.rows[0],
    });    } catch (error) {
        res.status(500).json("erreur interne du serveur "+ error)
    }
}

export const dropMessage=async(req,res)=>{
    const id=req.params.id;
    try {
        const supResult=await pool.query("DELETE  FROM messages WHERE id=$1 RETURNING *",[id]);
       
        // if(supResult.rowCount===0){
        //     return res.status(401).json("message introuvable");
        // }
        res.status(200).json({
            message:"Message bien supprimer",
            mss:supResult.rows[0]
        })
    } catch (error) {
        res.status(500).json("erreur interne du serveur" + error)
    }
}

export const editMessage=async(req,res)=>{
      const id=req.params.id;
      const {newContenue}=req.body;
      try {
        const editResult=await pool.query("UPDATE messages  SET contenue=$1 WHERE id=$2 RETURNING *",[newContenue,id]);
        if(!newContenue)return res.status(404).json("le message ne doit pas etre vide ")
        if(editResult.rowCount===0){
            return res.status(401).json("message introuvable");
        }
        res.status(200).json({
            message:"Modification reussi",
            reultat:editResult.rows[0]

        })
      } catch (error) {
        res.status(500).json("Erreur interne du serveur "+ error);
      }

}
export const reagirMess= async(req, res)=>{
    const id=req.params.id;
    try {
        
    } catch (error) {
        
    }

}