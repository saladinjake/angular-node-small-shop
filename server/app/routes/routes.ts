import { Router } from 'express';
import authInterceptor from '../middlewares/authInterceptor';
import authController from '../controllers/auth';
import homeController from '../controllers/home';

const router = Router();
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/test-private', authInterceptor, homeController.dashboard)

export default router;
