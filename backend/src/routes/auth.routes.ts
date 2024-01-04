import {Router, Request, Response} from 'express';
import db from '../db/connection.js'
import {comparePasswords} from '../utils/password.js'
import {generateJWT} from "../utils/jwt.js";
import IUser from "../types/IUser.js";

const router: Router = Router();

router.post('/', async (req: Request, res: Response): Promise<Response> => {
    if (!('login' in req.body) || !('password' in req.body)) {
        return res.status(400).json({message: "No 'login' or 'password' fields"});
    }

    const login: string = req.body['login'];
    const password: string = req.body['password'];
    const result: IUser[] = await db.getUserInfo(login);

    if (result.length === 0) {
        return res.status(400).json({message: "Incorrect login or password"});
    }

    const userData: IUser = result[0];

    if (!comparePasswords(password, userData.password)) {
        return res.status(400).json({message: "Incorrect login or password"});
    }

    const jwt: string | undefined = generateJWT(userData.id);

    if (jwt === undefined) {
        return res.status(500).json({message: "Something went wrong"});
    }

    return res.status(200).json({jwt, message: "Successful log in"});
});

export default router;
