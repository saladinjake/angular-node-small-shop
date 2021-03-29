import PaystackApi from '../services/paystack.service';
class PaymentsGatewayApi{
  static paystackPayMeMyMoney(req,res){
    return PaystackApi.paystackPayMeMoney(req,res);
  }

  static paystackCallBack(req,res){
    return PaystackApi.paystackCallBack(req,res);
  }

  static paystackReceipt(req,res){
    return PaystackApi.paystackReceipt(req,res);
  }

  static paystackHistory(req,res){
    return PaystackApi.paystackHistory(req,res);
  }

  // static paystackPayments(req,res){
  //   return PaystackApi.paystackPayments(req,res);
  // }

  // static createPaymentDetail(req,res){
  //   return PaystackApi.createPaymentDetail(req,res);
  // }
}

export default PaymentsGatewayApi;
