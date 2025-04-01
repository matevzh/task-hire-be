"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = AuthService_1 = class AuthService {
    userService;
    jwtService;
    logger = new common_1.Logger(AuthService_1.name);
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async register(userRegisterDto) {
        try {
            this.logger.log('Creating new user...');
            const user = await this.userService.create(userRegisterDto);
            this.logger.log('User created:', user);
            const payload = {
                email: user.email,
                sub: user.id,
            };
            this.logger.log('Creating token with payload:', payload);
            const token = this.jwtService.sign(payload);
            this.logger.log('Token created:', token);
            const response = {
                data: {
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    avatar: user.avatar,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                    access_token: token
                }
            };
            this.logger.log('Returning response:', response);
            return response;
        }
        catch (error) {
            this.logger.error('Registration error:', error);
            if (error.code === '23505') {
                throw new Error('Email already exists');
            }
            if (error.code === '23505' && error.detail?.includes('username')) {
                throw new Error('Username already exists');
            }
            throw error;
        }
    }
    async validateUser(userLoginDto) {
        try {
            this.logger.log('Validating user:', userLoginDto.email);
            const user = await this.userService.findByEmail(userLoginDto.email);
            if (!user) {
                this.logger.warn('User not found:', userLoginDto.email);
                throw new common_1.UnauthorizedException('Bad login');
            }
            this.logger.log('User found, comparing passwords');
            const isPasswordValid = await bcrypt.compare(userLoginDto.password, user.password);
            if (!isPasswordValid) {
                this.logger.warn('Invalid password for user:', userLoginDto.email);
                throw new common_1.UnauthorizedException('Bad login');
            }
            this.logger.log('User validated successfully');
            return user;
        }
        catch (error) {
            this.logger.error('User validation error:', {
                error: error,
                message: error.message,
                stack: error.stack
            });
            throw error;
        }
    }
    async login(userLoginDto) {
        try {
            this.logger.log('Attempting login for user:', userLoginDto.email);
            const user = await this.validateUser(userLoginDto);
            this.logger.log('User validated successfully:', user.id);
            const payload = {
                email: user.email,
                sub: user.id,
            };
            this.logger.log('Creating token with payload:', payload);
            let token;
            try {
                token = this.jwtService.sign(payload);
                this.logger.log('Token created successfully');
            }
            catch (jwtError) {
                this.logger.error('JWT signing error:', jwtError);
                throw new Error('Failed to create authentication token');
            }
            const response = {
                access_token: token,
                user: user
            };
            this.logger.log('Login successful, returning response');
            return response;
        }
        catch (error) {
            this.logger.error('Login error details:', {
                error: error,
                message: error.message,
                stack: error.stack,
                name: error.name
            });
            if (error instanceof common_1.UnauthorizedException) {
                throw error;
            }
            throw new Error('Internal server error during login');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map