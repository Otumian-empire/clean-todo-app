import Todo from "../../domain/todo";

export class CreateTodo {
    title: string;
    body: string;
}

export class CreatedTodo {
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

export class UpdateTitle {
    id: number;
    title: string;
}

export class UpdateBody {
    id: number;
    body: string;
}

export class UpdateIsDone {
    id: number;
    isDone: boolean;
}

export class GetById {
    id: number;
}

export class Filter {
    limit: number = 10;
    offset: number = 1;
}
