import Joi from "joi";

import {
    CreateUser,
    UpdateActivation,
    UpdatePassword,
    UpdateVerification,
} from "./user.dto";
import UserSchema from "./user.schema";

export default class UserValidation {
    private static validate(schema: object, reqBody: object) {
        return Joi.object(schema).validate({
            reqBody,
        });
    }

    public static createUser(reqBody: CreateUser) {
        return UserValidation.validate(UserSchema.createUser, reqBody);
    }

    public static updatePassword(reqBody: UpdatePassword) {
        return UserValidation.validate(UserSchema.updatePassword, reqBody);
    }

    public static updateVerification(reqBody: UpdateVerification) {
        return UserValidation.validate(UserSchema.updateVerification, reqBody);
    }

    public static updateActivation(reqBody: UpdateActivation) {
        return UserValidation.validate(UserSchema.updateActivation, reqBody);
    }
}
