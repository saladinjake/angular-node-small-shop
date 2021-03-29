
class PaymentsGatewayApi{
  static paystackPayMeMoney(req,res){
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

  static paystackPayments(req,res){
    return PaystackApi.paystackPayments(req,res);
  }
}

export default PaymentsGatewayApi;
