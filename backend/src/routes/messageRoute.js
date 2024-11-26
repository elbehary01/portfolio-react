import express from 'express';
import { visitorMessage } from '../controllers/messageController.js';

const messageRouter = express.Router();

messageRouter.post('/message', visitorMessage);

export default messageRouter;
