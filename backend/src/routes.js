import express from 'express';

import DatabaseController from './controllers/DatabaseController';
import MoviesController from './controllers/MoviesController';

const routes = express.Router();

routes.get('/movies', MoviesController.index);
routes.get('/movie/:id', MoviesController.movieDetails);

routes.patch('/restart', DatabaseController.update);

export default routes;
