import mongoose from 'mongoose';
import {Schema, Model, Document, model} from 'mongoose';


const ProductSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
});

const Product = mongoose.model('Product', ProductSchema);
export default Product;
