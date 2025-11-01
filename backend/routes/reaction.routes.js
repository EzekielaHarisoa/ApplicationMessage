import express from "express"
import { authMiddle } from "../middleware/auth.middleware.js";
import { ajoutReaction, deleteReaction, voirReaction } from "../controllers/reaction.controller.js";
const reactionRouter= express.Router();

reactionRouter.post("/ajoutReaction/:id",authMiddle, ajoutReaction);
reactionRouter.delete("/deleteReaction/:id",authMiddle,deleteReaction);
reactionRouter.get("/voirReaction/:id", authMiddle,voirReaction);


export default  reactionRouter ;

