export interface CreateTodo {
    title: string;
    body: string;
}

export interface CreatedTodo {
    id: number;
    title: string;
    body: string;
    isDone: boolean;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface UpdateTitle {
    id: number;
    title: string;
}

export interface UpdateBody {
    id: number;
    body: string;
}

export interface UpdateIsDone {
    id: number;
    isDone: boolean;
}

export interface GetById {
    id: number;
}

export interface Filter {
    limit: number;
    offset: number;
}
