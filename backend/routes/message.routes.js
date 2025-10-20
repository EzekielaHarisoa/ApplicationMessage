import express from 'express';
  const messRouter=express.Router();
import { authMiddle } from '../middleware/auth.middleware.js';
import { createMessage } from '../controllers/message.controller.js';

messRouter.get("/sendMess",authMiddle,createMessage)
export default messRouter;