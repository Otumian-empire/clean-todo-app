import Todo from "../../domain/todo";
import { CreatedTodo } from "./todo.dto";

export default class TodoMapper implements CreatedTodo {
    id: number;
    title: string;
    body: string;
    isDone: boolean;
    userId: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(todo: Todo) {
        this.id = todo.id;
        this.title = todo.title;
        this.body = todo.body;
        this.isDone = todo.isDone;
        this.userId = todo.userId;
        this.createdAt = todo.createdAt;
        this.updatedAt = todo.updatedAt;
    }
}
