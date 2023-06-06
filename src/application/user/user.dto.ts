import User from "../../domain/user";

export class CreateUser {
    email: string;
    username: string;
    password: string;
}

export class CreatedUser {
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

export class UpdatePassword {
    id: number;
    password: string;
}

export class UpdateVerification {
    id: number;
    isVerified: boolean;
}

export class UpdateActivation {
    id: number;
    isActive: boolean;
}
