import { TasksService } from './tasks.service';
import { Task } from './entities/task';
import { CreateTaskDto } from './entities/create-task.dto';
import { UpdateTaskDto } from './entities/update-task.dto';
export declare class TasksController {
    private readonly taskService;
    private readonly logger;
    constructor(taskService: TasksService);
    getMyTasks(req: any): Promise<Task[]>;
    findAll(kategorija?: string): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    create(createTaskDto: CreateTaskDto, req: any): Promise<Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    delete(id: string): Promise<void>;
}
