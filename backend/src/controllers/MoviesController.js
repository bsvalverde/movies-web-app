import Genre from '../models/Genre';
import Movie from '../models/Movie';
import movieDatabase from '../services/movieDatabase';

class MoviesController {
  async index(req, res) {
    try {
      const { title, upcoming } = req.query;

      const params = {};
      if (title) {
        params.title = {
          $regex: new RegExp(title, 'i')
        };
      }
      if (upcoming) {
        params.release_date = {
          $gt: new Date()
        }
      }

      let { amount, offset } = req.query;
      amount = amount ? parseInt(amount) : Number.MAX_SAFE_INTEGER;
      offset = offset ? parseInt(offset) : 0;

      const movies = await Movie.find(params)
        .sort({ title: 'asc' })
        .skip(offset)
        .limit(amount)
        .select('title poster_path backdrop_path release_date movieDatabaseId');
      const total = await Movie.find(params)
        .countDocuments((err, count) => count);

      return res.json({movies: movies, total: total});
    } catch(error) {
      return res.status(500).json(error.message);
    }
  }

  async movieDetails(req, res) {
    try {
      const { id } = req.params;

      const movie = await Movie.findOne({ movieDatabaseId: id });
      const genres = await Genre.find({ _id: movie.genres })
      movie.genres = genres;

      return res.json(movie);
    } catch(error) {
      return res.status(500).json(error.message);
    }
  }
};

export default new MoviesController();
