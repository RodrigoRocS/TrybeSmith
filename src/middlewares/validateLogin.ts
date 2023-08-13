import bcrypt from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';
import UserModel from '../database/models/user.model';

interface CustomRequest extends Request {
  payload?: { id: number, name: string };
}

async function validateLogin(req: CustomRequest, res: Response, next: NextFunction): Promise<void> {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: '"username" and "password" are required' });
    return;
  }

  const findUser = await UserModel.findOne({ where: { username } });
  
  if (!findUser) {
    res.status(401).json({ message: 'Username or password invalid' });
    return;
  }
  const passwordCheck = await bcrypt.compare(password, findUser.dataValues.password);
  const { id, username: name } = findUser.dataValues;

  if (!passwordCheck) {
    res.status(401).json({ message: 'Username or password invalid' });
    return;
  }

  req.payload = { id, name };
  next();
}

export default validateLogin;
