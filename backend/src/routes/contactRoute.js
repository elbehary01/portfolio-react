import express from 'express';
import { visitorMessage } from '../controllers/contactController.js';

const contactRoute = express.Router();

contactRoute.post('/message', visitorMessage);

export default contactRoute;
