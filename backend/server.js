import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './src/config/mongodb.js';

import contactRoute from './src/routes/contactRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 9000;
connectDB();

// Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// api endpoints
app.get('/', (req, res) => {
  res.send('API Working');
});
app.use('/api/contact', contactRoute);

app.listen(port, () => {
  console.log('Server started on PORT: ' + port);
});
