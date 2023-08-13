import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';

async function signIn(): Promise<ServiceResponse<Token>> {
  const findUser = await UserModel.findOne();
  return { status: 'SUCCESSFUL', data: { Token } };
}
  
export default {
  signIn,
};