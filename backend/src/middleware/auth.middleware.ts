import {Request, Response} from "express";
import {verifyJWT} from "../utils/jwt.js";
import {JsonWebTokenError} from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: () => void): void => {
    if (!('authorization' in req.headers)) {
        res.status(401).json({message: "No authorization"});

        return
    }

    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        res.status(401).json({message: "No authorization"});

        return
    }

    const id = verifyJWT(token);

    if (!(typeof id === "object" && 'exp' in id)) {
        res.status(401).json({message: "No authorization"});

        return
    }

    next();
};

export default authMiddleware;
