import jwt from 'jsonwebtoken'
import { createError } from './error.js'

export const verifyToken = async (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        return next(createError(401, "You are not authenticated!"))
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return next(createError(401, "Not Valid Token"))
        }
        req.user = user;
        next();
    })
}

export const verifyUser = async (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return next(createError(401, "Not Authorized"))
        }

    })
}

export const verifyAdmin = async (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return next(createError(401, "Not Authorized"))
        }

    })
}
