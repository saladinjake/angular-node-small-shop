import { Router } from 'express';
import authInterceptor from '../middlewares/authInterceptor';
import authController from '../controllers/auth';
import homeController from '../controllers/home';
import PaymentsGatewayApi from '../controllers/payments';


const router = Router();
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/checkout', authInterceptor, homeController.checkout);
router.get('/',  homeController.index);
router.get('/orders', homeController.dashboard);


router.post('/paystack/pay',authInterceptor,PaymentsGatewayApi.paystackPayMeMyMoney); //
router.get('/paystack/callback',PaymentsGatewayApi.paystackCallBack); //they can handle their own auth-interceptor
router.get('/receipt/:id',PaymentsGatewayApi.paystackReceipt); //same here
router.get('/payment-history/:id',authInterceptor, PaymentsGatewayApi.paystackHistory); //we need to ensure the user is authorized on our end
// router.get('/payment-payments/:id',authInterceptor, PaymentsGatewayApi.paystackPayments);//same here
// router.post('/makepayments',authInterceptor,PaymentsGatewayApi.createPaymentDetail); //and here



export default router;
