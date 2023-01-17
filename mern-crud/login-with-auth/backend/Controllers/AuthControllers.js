const UserModel = require("../Models/UserModel");
const jwt = require('jsonwebtoken');
const maxTime = 7 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, "jiwan secret key", {
        expiresIn: maxTime,
    })
}


const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.create({ email, password })
        const token = createToken(user._id);
        res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: false,
            maxTime: maxTime * 1000,
        })
        res.status(201).json({ user: user._id, created: true });
    } catch (error) {
        console.log(error);
    }
}

const login = (req, res, next) => {

}

module.exports = { register, login }