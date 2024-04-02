import dotenv from "dotenv";
dotenv.config();
import Movie from "./models/Movie.js";
import Product from "./models/Products.js";

import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find(); // Adjust the model and method if necessary
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred");
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err){
    console.error(err);
    res.status(500).send("An error occurred");
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


import mongoose from "mongoose";


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((err) => console.error("Connection error", err));
