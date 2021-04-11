import mongoose from 'mongoose';
import { Document, Model, model, Types, Schema, Query } from "mongoose"
//import the related product model
//import the vendor model

const ProductSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
  suggested_products:[{
    type: String,
  }],
  size: {
     type: Number,
     enum: [0, 1,2,3],
     default: 0,
     required: true
   },
 //related: {
 //   type: Schema.Types.ObjectId,
 //   ref: "Related",
 //   required: true
 // },
 //vendor: {
 //   type: Schema.Types.ObjectId,
 //   ref: "Vendor",
 //   required: true
 // },




  //think it all out....
});


enum EnumSizes {
  small = 0,
  medium = 1,
  large=2,
  extraLarge=3
}

//has only variables
export interface Product {
  name: string,
  image: string,
  price: Number,
  description: string,
  size: EnumSizes,
  suggested_products: Array<string>,

  // related: Types.ObjectId | Record<string, unknown>;
  // vendor: Types.ObjectId | Record<string, unknown>;

  // creditCards?: Map<string, string>;
}

const Product = mongoose.model('Product', ProductSchema);
export default Product;
