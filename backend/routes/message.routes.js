import express from 'express';
  const messRouter=express.Router();
import { authMiddle } from '../middleware/auth.middleware.js';
import { createMessage, dropMessage } from '../controllers/message.controller.js';

messRouter.post("/sendMess/:id",authMiddle,createMessage);
messRouter.delete("/delete/:id",authMiddle,dropMessage);

export default messRouter;