<<<<<<< HEAD
import { Body, Controller, Post, Logger, HttpException, HttpStatus } from "@nestjs/common";
=======
import { Body, Controller, Post } from "@nestjs/common";
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
import { AuthService } from "./auth.service";
import { UserRegisterDto } from "./user-register.dto";
import { UserLoginDto } from "./user-login.dto";

@Controller('auth')
export class AuthController {
<<<<<<< HEAD
    private readonly logger = new Logger(AuthController.name);

    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() userRegisterDto: UserRegisterDto) {
        try {
            this.logger.log('Registering new user...');
            const result = await this.authService.register(userRegisterDto);
            this.logger.log('Registration response:', result);
            return result;
        } catch (error) {
            this.logger.error('Registration error:', {
                error: error,
                message: error.message,
                stack: error.stack
            });
            throw new HttpException(
                error.message || 'Registration failed',
                error instanceof HttpException ? error.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
=======
    constructor (private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() userRegisterDto: UserRegisterDto) {
    return await this.authService.register(userRegisterDto);
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
    }

    @Post('login')
    async login(@Body() userLoginDto: UserLoginDto) {
<<<<<<< HEAD
        try {
            this.logger.log('Logging in user:', userLoginDto.email);
            const result = await this.authService.login(userLoginDto);
            this.logger.log('Login response:', result);
            return result;
        } catch (error) {
            this.logger.error('Login error:', {
                error: error,
                message: error.message,
                stack: error.stack
            });
            throw new HttpException(
                error.message || 'Login failed',
                error instanceof HttpException ? error.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
=======
        return await this.authService.login(userLoginDto);
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
    }
}