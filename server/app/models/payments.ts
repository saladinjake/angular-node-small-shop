const Promise = require('bluebird');
import mongoose,{ Document, Model, model, Types, Schema, Query } from "mongoose"
const PaymentsSchema = new mongoose.Schema({
    full_name: {
        type: String,
    },
    status: {
      type: String,
      enum: [
      'Successful',
      'Failed',
      'Unpaid'
      ],
      default: 'Successful',
    },
    email: {
        type: String,
    },
    amount: {
        type: Number,
    },
    reference: {
        type: String,
    },
     phone_number:{
      type: String
    },
    createdDate:{
        type: Date,
        default: new Date()
    },
    userId:{
        type:String
    }
},{
        collection: 'pay_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});






PaymentsSchema.set('toJSON', {getters: true, virtuals: true});
PaymentsSchema.statics = {
    createPayments(data, callback)  {
        return this.create(data,callback);
    },
};





enum PayStatus {
  Successful=1,
  Failed =0,
  Unpaid =2
}

export interface Payment {
  full_name: string,
  email: string,
  reference: string;
  amount: number,
  status: PayStatus,
  phone_number:string,
  createdDate:string,
  userId: string
}

/**
 * Not directly exported
 */
interface PaymentBaseDocument extends Payment, Document {
  full_name: string,
  email: string,
  reference: string;
  amount: number,
  status: PayStatus,
  phone_number:string,
  createdDate:string,
  userId: string
  createPayments(data: Payment , callback:Function): string;
}

// Export this for strong typing
export interface PaymentDocument extends PaymentBaseDocument {

}

// Export this for strong typing
export interface PaymentPopulatedDocument extends PaymentBaseDocument {

}


// For model
export interface PaymentModel extends Model<PaymentDocument> {
  createPayments(id: string): Promise<PaymentPopulatedDocument>
}


// Document middlewares
// UserSchema.pre<UserDocument>("save", function(next) {
//   if (this.isModified("password")) {
//     this.password = hashPassword(this.password)
//   }
// });

// Query middlewares
// UserSchema.post<Query<UserDocument, UserDocument>>("findOneAndUpdate", async function(doc) {
//   await updateCompanyReference(doc);
// });

// Default export
export default model<PaymentDocument, PaymentModel>("Payment", PaymentsSchema)



// const Payment = mongoose.model('PaymentModel', PaymentsSchema);
// export default Payment;
