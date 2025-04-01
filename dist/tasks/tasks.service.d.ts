import { Task } from './entities/task';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './entities/create-task.dto';
import { UpdateTaskDto } from './entities/update-task.dto';
import { UsersService } from '../users/users.service';
import { KategorijeService } from 'src/kategorije/kategorije.service';
export declare class TasksService {
    private readonly taskRepository;
    private readonly userService;
    private readonly kategorijaService;
    constructor(taskRepository: Repository<Task>, userService: UsersService, kategorijaService: KategorijeService);
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    create(createTaskDto: CreateTaskDto, userId: number, kategorijaId: number): Promise<Task>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task>;
    delete(id: number): Promise<void>;
    findByCategory(categoryId: number): Promise<Task[]>;
    findByUser(userId: number): Promise<Task[]>;
}
