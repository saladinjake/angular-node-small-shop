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


// Static methods
ProductSchema.statics.getRelatedProducts = async function(this: Model<ProductDocument>,id: string) {
  // return this.findById(id).populate("related").exec()
}

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

//has both variables and methods
/**
 * Not directly needed
 */
interface ProductBaseDocument extends Product, Document {
  name: string,
  image: string,
  price: Number,
  description: string,
  // related: Types.Array<string>;
  // creditCards?: Types.Map<string>;
  // getProductSize(): string;
}


// For model statics and co
export interface ProductModel extends Model<ProductDocument> {
  getRelatedProducts(id: string): Promise<ProductPopulatedDocument>
}


// Export this for strong typing
export interface ProductDocument extends ProductBaseDocument {
  // related: Related["_id"];
}

// Export this for strong typing
export interface ProductPopulatedDocument extends ProductBaseDocument {
  // company: Related;
}





// Document middlewares
// ProductSchema.pre<ProductDocument>("save", function(next) {
//   if (this.isModified("password")) {
//     this.image = 'https://puttheurl/'+this.image
//   }
// });
//
// // Query middlewares
// ProductSchema.post<Query<UserDocument, ProductDocument>>("findOneAndUpdate", async function(doc) {
      //do the save action
// });


export default model<ProductDocument, ProductModel>("Product", ProductSchema)


// const Product = mongoose.model('Product', ProductSchema);
// export default Product;
