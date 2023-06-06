import Joi from "joi";

import {
    CreateTodo,
    Filter,
    GetById,
    UpdateBody,
    UpdateIsDone,
    UpdateTitle,
} from "./todo.dto";
import TodoSchema from "./todo.schema";

export default class TodoValidation {
    private static validate(schema: object, reqBody: object) {
        return Joi.object(schema).validate({
            reqBody,
        });
    }

    public static createTodo(reqBody: CreateTodo) {
        return TodoValidation.validate(TodoSchema.createTodo, reqBody);
    }

    public static updateTitle(reqBody: UpdateTitle) {
        return TodoValidation.validate(TodoSchema.updateTitle, reqBody);
    }

    public static updateBody(reqBody: UpdateBody) {
        return TodoValidation.validate(TodoSchema.updateBody, reqBody);
    }

    public static updateIsDone(reqBody: UpdateIsDone) {
        return TodoValidation.validate(TodoSchema.updateIsDone, reqBody);
    }

    public static getById(reqParam: GetById) {
        return TodoValidation.validate(TodoSchema.getById, reqParam);
    }

    public static filter(queryParam: Filter) {
        return TodoValidation.validate(TodoSchema.getById, queryParam);
    }
}
