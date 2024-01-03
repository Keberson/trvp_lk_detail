import {verifyJWT} from "../utils/jwt.js";


const authMiddleware = (req, res, next) => {
    if (!('authorization' in req.headers)) {
        res.status(401).json({message: "No authorization"});
    }

    const token = req.headers.authorization;

    if (!token) {
        res.status(401).json({message: "No authorization"});
    }

    const id = verifyJWT(token);

    if (!id) {
        res.status(401).json({message: "No authorization"});
    }

    next();
};

export default authMiddleware;
