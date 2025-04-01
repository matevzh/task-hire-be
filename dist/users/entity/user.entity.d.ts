import { Task } from "src/tasks/entities/task";
export declare class User {
    id: number;
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
    tasks: Task[];
    hashPassword(): Promise<void>;
}
