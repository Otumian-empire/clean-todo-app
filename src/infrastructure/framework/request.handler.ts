import { Request } from "express";

export default class RequestHandler {
    private static req: Request;

    public getInstance() {
        return RequestHandler.req;
    }

    public getBody() {
        return RequestHandler.req.body;
    }

    public getParam() {
        return RequestHandler.req.params;
    }

    public getQuery() {
        return RequestHandler.req.query;
    }

    public getHeader() {
        return RequestHandler.req.headers;
    }
}
