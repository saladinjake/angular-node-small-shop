const Promise = require('bluebird');
import mongoose from  'mongoose';
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
    quotation_id:{
     type:String,
      default: 'No quotation assigned yet'
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

const Payment = mongoose.model('PaymentModel', PaymentsSchema);
export default Payment;
