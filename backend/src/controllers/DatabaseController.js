import Genre from '../models/Genre';
import Movie from '../models/Movie';
import movieDatabase from '../services/movieDatabase';

class DatabaseController {
  async update(req, res) {
    const { language } = req.params;
    try {
      await deleteGenres();
      await loadGenres(language);
      await deleteMovies();
      await loadMovies(language);
      return res.json('ok')
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
};

const deleteGenres = async () => {
  await Genre.deleteMany({});
}

const loadGenres = async (language) => {
  const params = { language };
  const genres = (await movieDatabase.get('/genre/movie/list', { params })).data.genres;
  genres.forEach(genreParams => createGenre(genreParams));
};

const createGenre = async (params) => {
  await Genre.create({
    movieDatabaseId: params.id,
    name: params.name
  });
};

const deleteMovies = async () => {
  await Movie.deleteMany({});
};

const loadMovies = async (language) => {
  const pages = (await movieDatabase.get('/movie/upcoming')).data.total_pages;
  for(var page = 1; page <= pages; page++) {
    const params = { language, page };
    let movies = (await movieDatabase.get('/movie/upcoming', { params })).data.results;
    movies.forEach(movieParams => createMovie(movieParams));
  }
};

const createMovie = async (params) => {
  const { id, genre_ids, ...movieParams } = params;
  const genres = await Genre.find({ movieDatabaseId: genre_ids});
  await Movie.create({
    movieDatabaseId: id,
    genres,
    ...movieParams
  });
};

export default new DatabaseController();
