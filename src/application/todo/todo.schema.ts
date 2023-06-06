import Joi from "joi";

export default class TodoSchema {
    static createTodo = {
        title: Joi.string().min(5).max(50).required(),
        body: Joi.string().min(5).max(255).required(),
    };

    static updateTitle = {
        id: Joi.number().positive().required(),
        title: Joi.string().min(5).max(50).required(),
    };

    static updateBody = {
        id: Joi.number().positive().required(),
        body: Joi.string().min(5).max(255).required(),
    };

    static updateIsDone = {
        id: Joi.number().positive().required(),
        isDone: Joi.boolean().required(),
    };

    static getById = {
        id: Joi.number().positive().required(),
    };

    static filter = {
        limit: Joi.number().positive().optional(),
        offset: Joi.number().positive().optional(),
    };
}
