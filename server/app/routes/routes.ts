import { Router } from 'express';
import authInterceptor from '../middlewares/authInterceptor';
import authController from '../controllers/auth';
import homeController from '../controllers/home';
import PaymentsController from '../controllers/payments';


const router = Router();
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/checkout', authInterceptor, homeController.checkout);
router.get('/',  homeController.index);
router.get('/orders', homeController.dashboard)


export default router;
