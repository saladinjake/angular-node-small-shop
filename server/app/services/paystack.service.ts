import request from 'request';
import path from 'path';
const {initializePayment, verifyPayment} = require('../config/paystack')(request);
import { User } from '../models/user';

import PaymentModel, { Payment } from '../models/payments';

import { Model, Document, model} from 'mongoose';
export interface IForm  {
   fullname: string,
   email:string,
   amount:number,
   phone_number:string,
   metadata:object
}

class PaystackApi{
  static paystackPayMeMoney(req,res){
    console.log(req.body)
    //
    const form:IForm = {
      fullname: req.body.firstName + req.body.lastName,
      email: req.body.email,
      amount: req.body.total ,
      phone_number:"08130870416",
      metadata:{
        fullname: req.body.firstName + req.body.lastName
      }
    };
    //ensure
    form.metadata = {
          full_name : form.fullname
    }
    form.amount *= 100;
    form.amount *=100;

    initializePayment(form, (error, body)=>{
      if(error){
        //handle errors
        return res.json({error})
      }
      var response = JSON.parse(body);

      console.log(response)
      let url =response.data.authorization_url;

      return res.status(201).json({
        status: 201,
        message: `<h1>Please click the link to confirm your payments.<a style="color:red;text-decoration:none"  href="${url}">Proceed to payment</a></h6>
        `,
      });

    });

  }

  static paystackCallBack(req,res){
    const {reference,trxref} = req.query;
    //console.log(req.query)
    const ref = reference;
      verifyPayment(ref, (error,body)=>{
          if(error){
              //handle errors appropriately
              console.log(error)
              return res.redirect('/error');
          }

          var response = JSON.parse(body);
          console.log(JSON.stringify(response.data) +"given here")

          const {
            id,reference, amount,
            customer, metadata,
            phone_number
          } = response.data;
          console.log(id,reference,amount,customer,phone_number,customer.phone)


          const newDonor = {
            id: new String(id), reference,
            amount:(amount/100),
            email: customer.email,
            full_name: metadata.full_name,
            phone_number,
            metadata: metadata
          };



            const payee = new PaymentModel(newDonor)
            payee.save().then(function(rec){
              res.status(201).json(rec)
            })




      })

  }


  static paystackReceipt(req,res){
    const id = new String(req.params._id);
    PaymentModel.findById( id,function(err,data){
      if(!err){
        res.redirect('/')
      }
      console.log(err)
      res.redirect('/error')
     })


  }

  static paystackHistory(req,res){}



  static createPaymentDetail(request,response){}





}

export default PaystackApi;
