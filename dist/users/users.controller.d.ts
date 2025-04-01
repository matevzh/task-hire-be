import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    private readonly logger;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<{
        id: number;
        email: string;
        username: string;
        firstName: string;
        lastName: string;
        avatar?: string;
        createdAt: Date;
        updatedAt: Date;
        tasks: import("../tasks/entities/task").Task[];
    }>;
}
