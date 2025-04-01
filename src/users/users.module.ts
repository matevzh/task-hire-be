import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
<<<<<<< HEAD
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
=======

@Module({
  imports: [TypeOrmModule.forFeature([User])],
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
