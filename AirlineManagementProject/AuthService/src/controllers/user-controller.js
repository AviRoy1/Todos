const UserService = require('../services/user-service');
const Userservice = require('../services/user-service');
const userService =  new Userservice();


const create = async (req,res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password,
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully create a new user',
            data: response,
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            err: error
        })
    }
}

const signIn = async (req,res) => {
    try {
        const response = await userService.sighIn(req.body.email,req.body.password);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Successfully signed in",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            err: error
        })
    }
}

const isAuthenticatied = async (req,res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: 'User is authenticated and token is valid',
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            err: error
        })
    }
}


module.exports = {
    create,
    signIn,
    isAuthenticatied,
}