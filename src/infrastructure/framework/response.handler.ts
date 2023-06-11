import { Response } from "express";

export default class ResponseHandler {
    private static res: Response;

    public static send(data: object) {
        return ResponseHandler.res.json(data);
    }

    public static getInstance() {
        return ResponseHandler.res;
    }
}
