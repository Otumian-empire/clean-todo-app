import "dotenv/config";

export default class Config {
    private dbPath = String(process.env.DB_PATH || "sample.sqlite");

    getDBPath() {
        return this.dbPath;
    }
}
