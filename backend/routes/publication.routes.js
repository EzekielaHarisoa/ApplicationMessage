import express from "express";
import { createPub, voirPub } from "../controllers/publication.controller.js";
import { upload } from "../middleware/upload.middleware.js";
import { authMiddle } from "../middleware/auth.middleware.js";

const publicationRouter=express.Router();

publicationRouter.post("/create",authMiddle,upload.array("images",5),createPub);
publicationRouter.get("/voir/:id",authMiddle,voirPub);

export default publicationRouter;
