import { AuthService } from "./auth.service";
import { UserRegisterDto } from "./user-register.dto";
import { UserLoginDto } from "./user-login.dto";
export declare class AuthController {
    private readonly authService;
    private readonly logger;
    constructor(authService: AuthService);
    register(userRegisterDto: UserRegisterDto): Promise<{
        data: {
            id: number;
            username: string;
            firstName: string;
            lastName: string;
            email: string;
            avatar: string | undefined;
            createdAt: Date;
            updatedAt: Date;
            access_token: string;
        };
    }>;
    login(userLoginDto: UserLoginDto): Promise<{
        access_token: string;
        user: import("../users/entity/user.entity").User;
    }>;
}
