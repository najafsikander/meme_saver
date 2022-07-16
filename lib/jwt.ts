import jwt from 'jsonwebtoken';
import { NextApiRequest } from 'next';
const secret = process.env.SECRET || '';

const verifyJWT = (request: NextApiRequest): boolean => {
    let result: boolean = false;
    try {
        const authorization = request.headers.authorization;
        const token = authorization?.toString().split(' ')[1] || '';

        const verify = jwt.verify(token, secret);
        
        result = true;
    } catch (error) {
        console.warn('Error caught while verifying token: ', error);
        result = false;
    }

    return result;
}

export default verifyJWT;