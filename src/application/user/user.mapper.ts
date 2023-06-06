import User from "../../domain/user";
import { CreatedUser } from "./user.dto";

export default class UserMapper implements CreatedUser {
    id: number;
    email: string;
    username: string;
    isVerified: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor(user: User) {
        this.id = user.id;
        this.email = user.email;
        this.username = user.username;
        this.isVerified = user.isVerified;
        this.isActive = user.isActive;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;
    }
}
