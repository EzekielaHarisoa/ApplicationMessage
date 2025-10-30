import express from "express";
import { createPub } from "../controllers/publication.controller";
import { upload } from "../middleware/upload.middleware";
import { authMiddle } from "../middleware/auth.middleware";

const publicationRouter=express.Router();

publicationRouter.post("/",authMiddle,upload.array("images",5),createPub);

export default publicationRouter;
