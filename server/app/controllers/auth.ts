import {Request, Response, NextFunction} from 'express';
import { User, UserModel } from '../models/user';
import mongoose from 'mongoose'

class authController {
  public static login(request: Request, response: Response){
      User.find({email: request.body.email}).then(function(loginUser ){
        // if(!loginUser) {
        //   return response.status(401).json({message: 'Invalid username or password'})
        // }
        // if(!User.validatePassword(request.body.password,loginUser.password)) {
        //   return response.status(401).json({message: 'Invalid username or password'})
        // }
        // //
        // const withTokem = {
        //    email: loginUser.email,
        //    _id: loginUser._id,
        //    token:User.generateJWT()
        //  };
        //
        // response.status(200).json(withTokem)
     })

  }
 public static register(request: Request,response: Response){
    const newUser = new User({
      name: request.body.fullName,
      email: request.body.email,
    })
    newUser.password= User.hashPassword(request.body.password);
    newUser.save().then(function(rec){
      response.status(201).json(rec)
    })

  }
}

export default authController;
