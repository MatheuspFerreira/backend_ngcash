
import { Request, Response } from 'express';
import createLogin from '../../use-cases/auth/create-login';
import { verifyToken } from '../../lib/token';


export default {
  async login(req: Request, res: Response) {
    const credentials = {
      username:req.body.username,
      password:req.body.password
    }
    const loginData = <any> await createLogin(credentials);

    if(loginData.error) {
      return res.status(401).send(loginData);
    }

    return res.status(200).json(loginData);
  },

  async verify(req: Request, res: Response) {
    const user =  await verifyToken(
      req.body.token
    );

    return res.status(200).send(user);
  },
};
