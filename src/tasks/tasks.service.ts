import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './entities/create-task.dto';
import { UpdateTaskDto } from './entities/update-task.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class TasksService {
constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    private readonly userService: UsersService,
) {}

    async findAll(): Promise<Task[]> {
        return this.taskRepository.find();
    }

    async findOne(id: number): Promise<Task> {
        const task = await this.taskRepository.findOne({
            where: { id },
            relations: ['kategorija'],
        });
        if (!task) {
            throw new NotFoundException('Task not found');
        }
        return task;
    }   

    async create(createTaskDto: CreateTaskDto, userId: number): Promise<Task> {
        const user = await this.userService.findById(userId);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const newTask = this.taskRepository.create({...createTaskDto, user});
        return this.taskRepository.save(newTask);
    }

    async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
        const task = await this.taskRepository.findOne({ where: { id: id } });
        if (!task) {
            throw new NotFoundException('Task ne obstaja');
        }
        await this.taskRepository.update(id, updateTaskDto);
        const updatedTask = await this.taskRepository.findOne({ where: { id: id } });
        if (!updatedTask) {
            throw new NotFoundException('Task not found after update');
        }
        return updatedTask;
    }

    async delete(id: number): Promise<void> {
        await this.taskRepository.delete(id);
    }
}