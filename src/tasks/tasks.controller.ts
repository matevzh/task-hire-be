import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
    Request,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './entities/task';
import { CreateTaskDto } from './entities/create-task.dto';
import { UpdateTaskDto } from './entities/update-task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
    constructor(private readonly taskService: TasksService) {}

    @Get()
    async findAll(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Task> {
        return this.taskService.findOne(+id);
    }

    @Post()
    async create(
        @Body() createTaskDto: CreateTaskDto,
        @Request() req,
    ): Promise<Task> {
        return this.taskService.create(createTaskDto, req.user.userId);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateTaskDto: UpdateTaskDto,
    ): Promise<Task> {
        return this.taskService.update(+id, updateTaskDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        this.taskService.delete(+id);
    }
}