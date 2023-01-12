const { UserRepository } = require('../repository/index');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');
const bcrypt = require('bcrypt');
const AppErrors = require('../utils/error-hendlers');

class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data)
            return user;
        } catch (error) {
            if(error.name=='SequelizeValidationError') {
                throw error;
            }
            console.log("something went wrong in service layer");
            throw new AppErrors('ServerError','Something went worng in service','Logical issue',500);
        }
    }

    async sighIn(email,plainPassword) {
        try { 
            const user = await this.userRepository.getByEmail(email);
            const comp = this.checkPassword(plainPassword,user.password);
            if(!comp) {
                console.log("Password doesn't match");
                throw {error: 'Incorrect password'};
            }
            const newJWT = this.createToken({email:user.email, id: user.id});
            return newJWT;
            
        } catch (error) {
            console.log("Something went wrong in sign in process");
            throw error;
        }
    }

    async isAuthenticated(token) {
        try {
            const response = this.verifyToken(token);
            if(!response) {
                throw {error: 'Invalid token'};
            }
            const user = await this.userRepository.getById(response.id);
            if(!user) {
                throw {error: "No user corresponding token exists"};
            }
            return user.id;
        } catch (error) {
            console.log("Something went wrong in auth process");
            throw error;
        }
    }

    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, {expiresIn: '1h'});
            return result;
        } catch (error) {
            console.log("something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("something went wrong in token validation",error);
            throw error;
        }
    }

    checkPassword(userInputPlainPassword,encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
        } catch (error) {
            console.log("something went wrong in password verification",error);
            throw error;
        }
    }

    isAdmin(userId) {
        try {
            return this.userRepository.isAdmin(userId);
        } catch (error) {
            console.log("something went wrong in password verification",error);
            throw error;
        }
    }

}

module.exports = UserService;