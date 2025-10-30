import express from "express";
import multer from "multer";
import { createPub } from "../controllers/publication.controller";

const publicationRouter= express.Router();
const storage=multer.diskStorage(
    {
        destination:(req,file,cb)=>cb(null,"upload/"),
        filename:(req,file,cb)=>cb(null, Date.now()+"-"+ file.originalname),    
        
    }
)

export const upload=multer({storage});
