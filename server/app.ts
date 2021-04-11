import express from "express";
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import config from './app/config/config';
import { seed } from './app/seed/seed';
// import router from './app/routes/routes';
// import cors from 'cors';

import authInterceptor from './app/middlewares/authInterceptor';
import authController from './app/controllers/auth';
import homeController from './app/controllers/home';
import PaymentsGatewayApi from './app/controllers/payments';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  config.mongoURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true

   }

).then(function(con){
  console.log("database")
}).catch((err)=>{
  console.log("databa"+ err)
})

app.use(bodyParser.json());
// app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '../dist')))
// app.get("*", (req:express.Request, res: express.Response) => {
//   res.sendFile(path.join(__dirname, '../dist/index.html'))
// });
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});


app.post('/register', authController.register);
app.post('/login', authController.login);
app.get('/checkout', authInterceptor, homeController.checkout);
app.get('/products',  homeController.index);
app.get('/orders', homeController.dashboard);
app.post('/paystack/pay',authInterceptor,PaymentsGatewayApi.paystackPayMeMyMoney); //
app.get('/paystack/callback',PaymentsGatewayApi.paystackCallBack); //they can handle their own auth-interceptor
app.get('/receipt/:id',PaymentsGatewayApi.paystackReceipt); //same here
app.get('/payment-history/:id',authInterceptor, PaymentsGatewayApi.paystackHistory); //we need to ensure the user is authorized on our end


app.get('/setup/seed/migrations',async (request,response)=>{
  const result =await seed();
  return response.json({result})
})
app.listen(4000, () => console.log("App running on port 4000...yeh!!!"));
export default app;
