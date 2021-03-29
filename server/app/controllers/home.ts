import {Request, Response} from 'express';
import { User } from '../models/user';

class homeController {
  static home(request: Request, response: Response){

  }
  static dashboard(request: Request, response: Response){
    User.find({}).then(rec => {
      response.status(200).json(rec)
    })
  }

}

export default homeController;
