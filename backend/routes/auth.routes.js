import express from "express" 
const authRouter=express.Router();
import { authMiddle } from "../middleware/auth.middleware.js";
import { register,login } from "../controllers/auth.controller.js";

authRouter.post("/register",register);
authRouter.post("/login",login);
authRouter.get("/profile",authMiddle, (req ,res )=>{
    res.json({message:"profil accessible", user:req.user});
})
 export default authRouter;
