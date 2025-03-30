import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/user.entity';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { TasksController } from './tasks/tasks.controller';
import { KategorijeModule } from './kategorije/kategorije.module';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from './tasks/tasks.service';
import { Task } from './tasks/entities/task';
import { Kategorija } from './kategorije/entities/kategorija';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'taskhire',
    entities: [User, Task, Kategorija],
    synchronize: true,
  }),
  UsersModule,
  AuthModule,
  TasksModule,
  KategorijeModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
