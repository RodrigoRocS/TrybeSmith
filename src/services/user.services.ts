import { Payload } from '../types/Payload';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';
import jwt from '../utils/jwt';

async function signIn(payload: Payload): Promise<ServiceResponse<Token>> {
  if (!payload) {
    return { status: 'BAD_REQUEST', data: { message: 'Payload is undefined' } };  
  }
  const { id, name } = payload;
  const token = jwt.sign({ id, name });
  return { status: 'SUCCESSFUL', data: { token } };
}
  
export default {
  signIn,
};