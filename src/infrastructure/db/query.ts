export default class Query {
    static CreateUserTable = `
        CREATE TABLE IF NOT EXISTS
        user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            isVerified BOOLEAN NOT NULL DEFAULT false,
            isActive BOOLEAN NOT NULL DEFAULT false,
            createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
    `;

    static CreateTodoTable = `
        CREATE TABLE IF NOT EXISTS todo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            body TEXT,
            isDone BOOLEAN NOT NULL DEFAULT false,
            userId INTEGER NOT NULL,
            createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
    `;
}
