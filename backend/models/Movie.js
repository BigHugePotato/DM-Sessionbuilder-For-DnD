import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: String,
    plot: String,
  });
  
  const Movie = mongoose.model('Movie', movieSchema, "movies");
  
  export default Movie;