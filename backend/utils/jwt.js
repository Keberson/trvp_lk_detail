import jwt from 'jsonwebtoken';
import {readFileSync} from "fs";

const privateKey = readFileSync('private.key');

export const generateJWT = async (id) => {
    return jwt.sign({'id': id}, privateKey, {expiresIn: '9h'});
};

export const verifyJWT = (token) => {
    return jwt.verify(token, privateKey);
};
