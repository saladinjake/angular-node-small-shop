import express from "express";
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import config from './app/config/config';
import router from './app/routes/routes';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  config.mongoURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true 

   }

);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '../dist')))
app.use('api/v1',router);
app.get("*", (req:express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});
app.listen(3000, () => console.log("App running on port 3000...yeh!!!"));
export default app;
