import jwt, {JsonWebTokenError} from 'jsonwebtoken';
import {readFileSync} from "fs";

const privateKey: Buffer = readFileSync('private.key');

export const generateJWT = (id: string): string | undefined => {
    return jwt.sign({'id': id}, privateKey, {expiresIn: '9h'});
};

export const verifyJWT = (token: string): string | jwt.JwtPayload | JsonWebTokenError => {
    try {
        return jwt.verify(token, privateKey);
    } catch (e) {
        return e;
    }
};
