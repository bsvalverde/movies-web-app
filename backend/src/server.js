import 'dotenv/config';

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true });

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3030);
