import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'ADA64D6AD46A4D6A46D4A136A4DAD1A31D3A4DA6DA1$%&//%$131313464971124654'

export const signToken = (payload: object, expiresIn: any = '1h') => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export const verifyToken = (token: string) =>
    jwt.verify(token, JWT_SECRET);