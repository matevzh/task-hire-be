<<<<<<< HEAD
/**
 * Tasks controller za HTTP requeste
 */
=======
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
<<<<<<< HEAD
    Query,
    ClassSerializerInterceptor,
    UseInterceptors,
    Request,
    SerializeOptions,
    Logger,
=======
    Request,
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './entities/task';
import { CreateTaskDto } from './entities/create-task.dto';
import { UpdateTaskDto } from './entities/update-task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tasks')
<<<<<<< HEAD
@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({ strategy: 'excludeAll' })
export class TasksController {
    private readonly logger = new Logger(TasksController.name);

    constructor(private readonly taskService: TasksService) {}

    // get all tasks for the user
    @Get('my-tasks')
    @UseGuards(JwtAuthGuard)
    async getMyTasks(@Request() req): Promise<Task[]> {
        this.logger.log('Getting tasks for user:', {
            userId: req.user?.userId,
            user: req.user,
            headers: req.headers.authorization
        });
        
        // get user id
        const userId = parseInt(req.user?.userId, 10);
        
        // check if user id is valid
        if (isNaN(userId)) {
            this.logger.error('Invalid user ID:', req.user?.userId);
            throw new Error('Invalid user ID');
        }

        try {
            // find tasks by user id
            const tasks = await this.taskService.findByUser(userId);
            this.logger.log(`Found ${tasks.length} tasks for user ${userId}`);
            return tasks;
        } catch (error) {
            this.logger.error('Error in getMyTasks:', {
                userId,
                error: error.message,
                stack: error.stack
            });
            throw error;
        }
    }

    // get tasks po kategoriji
    @Get()
    async findAll(@Query('kategorija') kategorija?: string): Promise<Task[]> {
        console.log('Tasks Controller - Raw kategorija param:', kategorija);
        
        if (kategorija) {
            const kategorijaId = parseInt(kategorija, 10);
            console.log('Tasks Controller - Finding tasks for kategorija:', kategorijaId);
            const tasks = await this.taskService.findByCategory(kategorijaId);
            console.log('Tasks Controller - Found tasks:', JSON.stringify(tasks, null, 2));
            return tasks;
        }
        
        const tasks = await this.taskService.findAll();
        console.log('Tasks Controller - All tasks:', JSON.stringify(tasks, null, 2));
        return tasks;
=======
@UseGuards(JwtAuthGuard)
export class TasksController {
    constructor(private readonly taskService: TasksService) {}

    @Get()
    async findAll(): Promise<Task[]> {
        return this.taskService.findAll();
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Task> {
        return this.taskService.findOne(+id);
    }

    @Post()
<<<<<<< HEAD
    @UseGuards(JwtAuthGuard)
=======
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
    async create(
        @Body() createTaskDto: CreateTaskDto,
        @Request() req,
    ): Promise<Task> {
        return this.taskService.create(createTaskDto, req.user.userId, createTaskDto.kategorijaId);
    }

    @Patch(':id')
<<<<<<< HEAD
    @UseGuards(JwtAuthGuard)
=======
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
    async update(
        @Param('id') id: string,
        @Body() updateTaskDto: UpdateTaskDto,
    ): Promise<Task> {
<<<<<<< HEAD
        this.logger.log('Updating task:', {
            id,
            updateData: updateTaskDto
        });
=======
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
        return this.taskService.update(+id, updateTaskDto);
    }

    @Delete(':id')
<<<<<<< HEAD
    @UseGuards(JwtAuthGuard)
=======
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
    async delete(@Param('id') id: string): Promise<void> {
        this.taskService.delete(+id);
    }
}