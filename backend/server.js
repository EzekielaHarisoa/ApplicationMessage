import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5000;
import pkg from "pg";

// Middleware
app.use(cors());
app.use(express.json());

const {Pool}=pkg;
const pool= new Pool({
  user:"postgres",
  host:"localhost",
  password:"chatonnofy",
  database:"messageDB"
})
// Sample route
app.post("/user", async (req, res) => {
  const {nom,email,password}=req.body;
  try {
    const result=await pool.query("INSERT INTO utilisateur(nom,email,password) values ($1,$2,$3)",[nom,email,password]);
    if(!result){
      res.status(401).json("erreur de requette ");
    }
    res.status(200).json({message:"Insertion reussi", user:result});
    console.log("user:" + result)
  } catch (error) {
      res.status(500).json("erreur interne du serveur",error);

  }

});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});