import { Module } from '@nestjs/common';
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
@Module({
    imports: [ConfigModule.forRoot(), UsersModule, PassportModule, JwtModule.register({
        secret: 'dfiksjdf',
        signOptions: { expiresIn: '5h' }
    })],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
