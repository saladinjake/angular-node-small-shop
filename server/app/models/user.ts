import mongoose from 'mongoose';
import {Schema, Model, Document, model} from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';

// import uniqueValidator from 'mongoose-unique-validator';
import jwt from 'jsonwebtoken'
import config from '../config/config'


export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

export interface IUserModel {
    generateJWT(): void
    hashPassword(password: string):string
    validatePassword(password: string,hash:string): void
}


const userSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  password: {type: String},
  createsAt: {type: String, default: Date.now()}
})

userSchema.methods.hashPassword = function(password:string) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
userSchema.methods.validatePassword = function(password:string,hash:string) {
   return bcrypt.compareSync(password, hash);
};
userSchema.methods.generateJWT = function(data:{_id:string,email:string}) {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);
  // const time = parseInt( Number(expirationDate.getTime()) / 1000, 10)

  return jwt.sign({
    email: data.email,
    id: data._id,
    exp: "48h" ,
  }, config.secret);
}
// userSchema.plugin(uniqueValidator);

export type UserModel = Model<IUser> & IUserModel & IUser;

export const User: UserModel = <UserModel>model<IUser>("User", userSchema);
