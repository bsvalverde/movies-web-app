import axios from 'axios';

const movieDatabase = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.MOVIE_DATABASE_API_KEY
  }
});

export default movieDatabase;
