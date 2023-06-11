import { Application } from "express";
import App from "./infrastructure/framework/app";
import DataContext from "./infrastructure/db/data_context";
import Config from "./infrastructure/db/config";
import Query from "./infrastructure/db/query";

class Program {
    private app: App;
    private db: DataContext;
    private config: Config;

    constructor() {
        this.app = new App();
        this.server(this.app.getInstance());
        this.initDB();
    }

    initDB() {
        this.config = new Config();
        this.db = new DataContext();

        const _db = this.db.getInstance(this.config.getDBPath());

        _db.exec(Query.CreateUserTable);
        _db.exec(Query.CreateTodoTable);
    }

    middlewares(app: Application) {
        // app.use;
    }

    route(app: Application) {}

    server(app: Application) {
        app.listen(7000, () =>
            console.log("Hello there, I am running on port 7000")
        );
    }
}

const program = new Program();
// program.server();
