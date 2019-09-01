import { Schema, model } from 'mongoose';

const GenreSchema = new Schema({
  movieDatabaseId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

export default model('Genre', GenreSchema);
