import jwt, { SignOptions } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  id: number,
  name: string,
};

const jwtConfig: SignOptions = { algorithm: 'HS256', expiresIn: '60m' };

function sign(payload: TokenPayload): string {
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
}

function verify(token: string): TokenPayload {
  const decoded = jwt.verify(token, secret) as TokenPayload;
  return decoded;
}

export default {
  sign,
  verify,
};
