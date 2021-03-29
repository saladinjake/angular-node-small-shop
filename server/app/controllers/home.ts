import {Request, Response} from 'express';
import { User } from '../models/user';
import  Product  from '../models/product';
import  Order  from '../models/product';
class homeController {
  static index(request: Request, response: Response){
    Product.find().then(rec => {
      if(rec) {
        response.status(200).json(rec);
      } else {
        response.status(200).json([]);
      }
    })

  }
  static checkout(request: Request, response: Response){
    const newOrder = new Order({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      addressOne: request.body.addressOne,
      addressTwo: request.body.addressTwo,
      country: request.body.country,
      state: request.body.state,
      zip: request.body.zip,
      items: request.body.items.map(item => item._id) || []
    })
    newOrder.save().then(rec => {
      response.status(200).json(rec)
    }, (err) => {
      response.status(500).json({error: 'error'})
    });
  }

  static dashboard(request: Request, response: Response){
    Order.find({email: request.body.email })
    .populate('items')
    .exec()
    .then(rec => {
      response.status(200).json(rec);
    })
    .catch(err => {
      response.status(500).json(err);
    })
  }

}

export default homeController;
