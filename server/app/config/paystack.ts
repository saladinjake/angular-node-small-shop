import dotenv from "dotenv";
dotenv.config();
const api_url_init ='https://api.paystack.co/transaction/initialize';
const api_url_verify ='https://api.paystack.co/transaction/verify/';
const paystack = (request) => {
    const MySecretKey = 'Bearer '+ 'sk_test_a62947c59ee8be8375793ec6f0f197422f43eb19'; //saladin

    const initializePayment = (form, mycallback) => {
        const options = {
            url :api_url_init,
            headers : {
                authorization: MySecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache'
            },
            form
        }
        const callback = (error, response, body) => {
            return mycallback(error, body)
        }
        request.post(options, callback)
    }

    const verifyPayment = (ref, mycallback) => {
        const options = {
            url : api_url_verify+encodeURIComponent(ref),
            headers : {
                authorization: MySecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache'
            }
        }
        const callback = (error, response, body) => {
            return mycallback(error, body)
        }
        request(options, callback)
    }

    return {initializePayment, verifyPayment};
}


module.exports=paystack;
