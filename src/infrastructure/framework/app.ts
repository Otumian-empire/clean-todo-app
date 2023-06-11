import express, { Application } from "express";

export default class App {
    private app: Application;

    constructor() {
        this.app = express();
    }

    getInstance(): Application {
        if (this.app === null) {
            this.app = express();
        }

        return this.app;
    }
}
