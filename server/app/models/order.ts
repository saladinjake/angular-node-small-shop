import mongoose from 'mongoose';
import {Schema, Model, Document, model} from 'mongoose';

const OrderSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  addressOne: String,
  addressTwo: String,
  country: String,
  state: String,
  zip: String,

  items: [{type: Schema.Types.ObjectId, ref: 'Product'}],
  date: {type: Date, default: Date.now()}
});

const Order = mongoose.model('Order', OrderSchema);
export default Order;
