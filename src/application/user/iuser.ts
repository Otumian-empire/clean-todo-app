import { CreateUser, CreatedUser } from "./user.dto";

export default interface IUser {
    // create user
    create(user: CreateUser): CreatedUser;

    // read user
    read(id: number): CreatedUser;

    // update user
    // This type will have the userId and the the field to change
    update<T>(row: T): CreatedUser;

    // delete user
    delete(id: number): void;
}
