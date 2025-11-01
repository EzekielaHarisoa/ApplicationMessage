import { BaseError } from "sequelize";
import pool from "../config/db.js"; 

export const createPub = async (req, res) => {
  const client = await pool.connect();
  try {
    const { title, description, images } = req.body;
    const userId = req.user.id; 

    if (!title) {
      return res.status(400).json({ message: "Le titre est obligatoire" });
    }

    await client.query("BEGIN");

    const postResult = await client.query(
      "INSERT INTO publication(title, description, iduser) VALUES ($1, $2, $3) RETURNING *",
      [title, description, userId]
    );

    const postId = postResult.rows[0].id;

    
    if (images && images.length > 0) {
      const imageQuery = "INSERT INTO imagePost(postId, imagePath) VALUES ($1, $2)";

      for (const img of images) {
        await client.query(imageQuery, [postId, img.path]);
      }
    }

    await client.query("COMMIT");
    res.status(201).json({
      message: "Publication créée avec succès",
      postId: postId,
    });
  } catch (err) {
    await client.query("ROLLBACK");
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" + err});
  } finally {
    client.release();
  }
};

export const voirPub= async(req, res)=>{
  try {
    const id=req.parms.id;
    const result= await pool.query("select * from publication where id=$1",[id]);
    // if(result.rowCount===0){
    //   res.status(401).json("erreur de requette de voir la pub");
    // }
    res.status(201).json({
      message:"voici les contenues du pub ",
      user:result.rows[0]  
    })
  } catch (error) {
    res.status(500).json("Erreur intern du serveur" + error );

  }
}