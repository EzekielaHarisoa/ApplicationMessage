import pool from "../config/db.js"; // ajoute .js si tu es sous ES Modules

export const createPub = async (req, res) => {
  const client = await pool.connect();
  try {
    const { title, description, images } = req.body;
    const userId = req.user.id; // Récupération de l'id de l'utilisateur

    if (!title) {
      return res.status(400).json({ message: "Le titre est obligatoire" });
    }

    await client.query("BEGIN");

    // Insertion du post
    const postResult = await client.query(
      "INSERT INTO publication(title, description, userId) VALUES ($1, $2, $3) RETURNING id",
      [title, description, userId]
    );

    const postId = postResult.rows[0].id;

    // Si on a des images à insérer
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
    res.status(500).json({ message: "Erreur serveur" });
  } finally {
    client.release();
  }
};
