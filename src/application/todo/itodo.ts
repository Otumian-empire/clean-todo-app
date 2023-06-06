import { CreateTodo, CreatedTodo, Filter } from "./todo.dto";

export default interface ITodo {
    // create todo
    create(uId: number, todo: CreateTodo): CreatedTodo;

    // read todo
    read(uId: number, tId: number): CreatedTodo;

    // read all todos
    readAll(uId: number, filter: Filter): CreatedTodo[];

    // update todo
    // This type will have the todoId and the the field to change
    update<T>(uId: number, obj: T): CreatedTodo;

    // delete todo
    delete(uId: number, tId: number): void;
}
