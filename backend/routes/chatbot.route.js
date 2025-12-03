import express from 'express';
import { Message } from '../controllers/chatbot.message.js';

const router = express.Router();
//prompt database ma bjna ha us ka liya route ha
router.post("/message",Message)

export default router