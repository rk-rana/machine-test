import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import './config/db.connect.js'
import studentRoutes from './routes/studentroute.js';

const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/enroll', studentRoutes);

const PORT = process.env.PORT|| 5000;


app.listen(PORT, ()=> console.log(`--I am running ${PORT}----`));