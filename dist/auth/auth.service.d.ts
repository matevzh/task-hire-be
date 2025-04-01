import { UsersService } from "../users/users.service";
import { UserRegisterDto } from "./user-register.dto";
import { User } from "../users/entity/user.entity";
import { UserLoginDto } from "./user-login.dto";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly logger;
    constructor(userService: UsersService, jwtService: JwtService);
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
    validateUser(userLoginDto: UserLoginDto): Promise<User>;
    login(userLoginDto: UserLoginDto): Promise<{
        access_token: string;
        user: User;
    }>;
}
