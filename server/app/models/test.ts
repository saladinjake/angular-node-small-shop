import {
  Document, Model,
  Schema model
} from 'mongoose';

interface IUser {/*...*/}

interface IUserDocument extends IUser, Document {/*...*/}

interface IUserModel extends Model<IUserModel>{/*...*/}

const UserSchema = new Schema({/*...*/});

UserSchema.methods.findSimilarTypes = async function(this: IUserDocument ) {/*...*/};

UserSchema.statics.findByName = function( this: IUserModel, name:string) {/*...*/};

export const UserModel = model<IUserDocument, IUserModel>(
  "Animal",
  UserSchema
);
