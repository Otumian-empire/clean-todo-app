import { Database } from "sqlite3";

export default class DataContext {
    private db: Database;

    getInstance(databasePath: string) {
        if (this.db === null || this.db == undefined) {
            this.db = new Database(databasePath);
        }

        return this.db;
    }
}
