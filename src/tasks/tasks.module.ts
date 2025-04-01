import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
<<<<<<< HEAD
import { UsersModule } from '../users/users.module';
=======
import { UsersModule } from 'src/users/users.module';
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
import { KategorijeModule } from 'src/kategorije/kategorije.module';
@Module({
    imports: [TypeOrmModule.forFeature([Task]), UsersModule, KategorijeModule],
    controllers: [TasksController],
    providers: [TasksService]
})
export class TasksModule {}
