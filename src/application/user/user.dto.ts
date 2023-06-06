export interface CreateUser {
    email: string;
    username: string;
    password: string;
}

export interface CreatedUser {
    id: number;
    email: string;
    username: string;
    isVerified: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface UpdatePassword {
    id: number;
    password: string;
}

export interface UpdateVerification {
    id: number;
    isVerified: boolean;
}

export interface UpdateActivation {
    id: number;
    isActive: boolean;
}
