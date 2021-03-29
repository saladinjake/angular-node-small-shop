import {Request, Response, NextFunction} from 'express';

import jwt from 'jsonwebtoken';
import config from '../config/config'


const authInterceptor = function(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, config.secret);
    // req.userData = decode;
    next();
  } catch(err) {
    return res.status(403).json({
      "message": "Sorry you are not Authenticated"
    })
  }

}

export default  authInterceptor;
