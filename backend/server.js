import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import connectDB from './src/config/mongodb.js';

import contactRoute from './src/routes/contactRoute.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// App Config
const app = express();
const port = process.env.PORT || 9000;
connectDB();

// Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// api endpoints
app.use('/api/contact', contactRoute);

// Serve frontend
if (process.env.NODE_ENV === 'development') {
  app.use(express.static(path.join(__dirname, '../client/public')));
  console.log(process.env.NODE_ENV);

  app.get('/', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to development mode'));
}

app.listen(port, () => {
  console.log('Server started on PORT: ' + port);
});