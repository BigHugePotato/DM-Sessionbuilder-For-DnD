import { Db } from 'mongodb';
import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: String,
    plot: String,
  });

  const db = mongoose.connection.useDb("sample_mflix");
  
  const Movie = db.model('Movie', movieSchema, "movies");
  
  export default Movie;