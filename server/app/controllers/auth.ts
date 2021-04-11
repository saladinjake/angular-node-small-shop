import {Request, Response, NextFunction} from 'express';
import mongoose from 'mongoose'

import {  User, hashPassword, findByEmail,validatePassword,generateJWT  } from '../models/user';

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

      console.log(User);

      findByEmail(User, email, (err, user) => {
        if(user) {
            validatePassword(request.body.password, user.password, (err, isMatch) => {
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
                        token:generateJWT({_id: isMatch._id,email: isMatch.email,
                        })
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
    console.log(request.body)
    newUser.password= hashPassword(request.body.password);
    newUser.save().then(function(rec){
      response.status(201).json(rec)
    })

  }
}

export default authController;
