import { Module } from '@nestjs/common';
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
<<<<<<< HEAD
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { 
                expiresIn: process.env.JWT_EXPIRATION || '5h'
            }
        }),
    ],
=======
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
@Module({
    imports: [ConfigModule.forRoot(), UsersModule, PassportModule, JwtModule.register({
        secret: 'dfiksjdf',
        signOptions: { expiresIn: '5h' }
    })],
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
