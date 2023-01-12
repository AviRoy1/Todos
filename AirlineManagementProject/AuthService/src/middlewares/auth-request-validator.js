const validateUserAuth = (req,res,next) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            success: false,
            data:{},
            message: "Something went wrong",
            err: 'Email or password missing',
        })
    }
    next();
}

const validateIsAdminRequest = (req,res,next)  => {
    if(!req.body.id) {
        return res.status(400).json({
            success: false,
            err: 'User id not given',
            err: error,
        })
    }
    next();
}


module.exports = {
    validateUserAuth,
    validateIsAdminRequest
}