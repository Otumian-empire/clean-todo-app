import Joi from "joi";

export default class UserSchema {
    static createUser = {
        email: Joi.string().email().required(),
        username: Joi.string().min(4).max(10).required(),
        password: Joi.string().min(4).max(10).required(),
    };

    static updatePassword = {
        id: Joi.number().positive().required(),
        password: Joi.string().min(4).max(10).required(),
    };

    static updateVerification = {
        id: Joi.number().positive().required(),
        isVerified: Joi.boolean().required(),
    };

    static updateActivation = {
        id: Joi.number().positive(),
        isActive: Joi.boolean().required(),
    };
}
