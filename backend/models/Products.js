import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  category: String,
  image: String,
});

const Product = mongoose.model("Product", productSchema, "products");

export default Product;
