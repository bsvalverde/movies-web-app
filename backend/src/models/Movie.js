import { Schema, model } from 'mongoose';

const MovieSchema = new Schema({
  movieDatabaseId: {
    type: Number,
    required: true
  },
  title: String,
  original_title: {
    type: String,
    required: true
  },
  original_language: String,
  release_date: Date,
  genres: [{
    type: Schema.Types.ObjectId,
    ref: 'Genre'
  }],
  overview: String,
  poster_path: String,
  backdrop_path: String,
  popularity: Number,
  vote_count: Number,
  vote_average: Number
});

export default model('Movie', MovieSchema);
