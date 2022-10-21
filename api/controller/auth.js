import User from "../model/User.js";
import bcrypt from 'bcryptjs';
import { createError } from "../utils/error.js";
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            password: hash,
            email: req.body.email,

        })
        await newUser.save();
        res.status(201).json({ message: "User Created" })
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        // const {username, password} = req.body;
        // const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync(req.body.password, salt);

        // here we are finding user from database
        const user = await User.findOne({
            username: req.body.username
        })

        // checking user is exist or not
        if (!user) {
            return next(createError(404, "User not found"))
        }

        // here we are checking password
        const checkedPassword = await bcrypt.compare(req.body.password, user.password)
        if (!checkedPassword) {
            return next(createError(400, "Username or Password is incorrect"))
        }

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET_KEY)

        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie(
            "access_token", token, {
            httpOnly: true
        }).status(200).json({ ...otherDetails });
    } catch (error) {
        next(error)
    }
}

