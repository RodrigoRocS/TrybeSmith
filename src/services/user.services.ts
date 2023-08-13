import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';
import { User } from '../types/User';
import jwt from '../utils/jwt';

async function signIn(user: User): Promise<ServiceResponse<Token>> {
  const findUser = await UserModel.findOne({ where: { username: user.username } });
  const { id, username } = findUser?.dataValues;
  const token = jwt.sign({ id, username });
  return { status: 'SUCCESSFUL', data: { token } };
}
  
export default {
  signIn,
};