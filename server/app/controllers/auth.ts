import {Request, Response, NextFunction} from 'express';
import { User, UserModel } from '../models/user';
import mongoose from 'mongoose'

class authController {
  public static login(request: Request, response: Response){
      let email = request.body.email;
      const re = /\S+@\S+\.\S+/;
      if (!re.test(email)) {
          response.status(400);
          response.json({
            success: false,
            message: 'wrong input.'
          });
                return false;
      }

      User.findByEmail(email, (err, user) => {
        if(user) {
            User.validatePassword(request.body.password, user.password, (err, isMatch) => {
                if (err) {
                    response.status(500);
                      response.json({
                        success: false,
                        message: 'something is not right.'
                      });
                } else if (isMatch) {

                    const withTokem = {
                        email: isMatch.email,
                        _id: isMatch._id,
                        token:User.generateJWT()
                    };
                    response.json(withTokem);
                } else {
                    response.status(400);
                        response.json({
                            success: false,
                            message: 'you have wrong credentials.'
                        });
                  }
                });
            } else {
                response.status(400);
                response.json({
                  success: false,
                  message: 'may have wrong credentials.'
                });
            }
      });
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
