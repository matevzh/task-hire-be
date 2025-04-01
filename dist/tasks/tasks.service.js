"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_1 = require("./entities/task");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
const kategorije_service_1 = require("../kategorije/kategorije.service");
let TasksService = class TasksService {
    taskRepository;
    userService;
    kategorijaService;
    constructor(taskRepository, userService, kategorijaService) {
        this.taskRepository = taskRepository;
        this.userService = userService;
        this.kategorijaService = kategorijaService;
    }
    async findAll() {
        const tasks = await this.taskRepository.find({
            relations: ['kategorija']
        });
        console.log('Tasks Service - All tasks:', JSON.stringify(tasks, null, 2));
        return tasks;
    }
    async findOne(id) {
        console.log('Tasks Service - Finding task with ID:', id);
        const task = await this.taskRepository.findOne({
            where: { id },
            relations: ['kategorija'],
        });
        console.log('Tasks Service - Found task:', JSON.stringify(task, null, 2));
        if (!task) {
            throw new common_1.NotFoundException('Task not found');
        }
        return task;
    }
    async create(createTaskDto, userId, kategorijaId) {
        const user = await this.userService.findById(userId);
        const kategorija = await this.kategorijaService.findById(kategorijaId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const newTask = this.taskRepository.create({ ...createTaskDto, kategorija, user });
        return this.taskRepository.save(newTask);
    }
    async update(id, updateTaskDto) {
        const task = await this.taskRepository.findOne({
            where: { id: id },
            relations: ['kategorija']
        });
        if (!task) {
            throw new common_1.NotFoundException('Task not found');
        }
        if (updateTaskDto.kategorijaId) {
            const kategorija = await this.kategorijaService.findById(updateTaskDto.kategorijaId);
            if (!kategorija) {
                throw new common_1.NotFoundException('Category not found');
            }
            task.kategorija = kategorija;
        }
        Object.assign(task, {
            title: updateTaskDto.title || task.title,
            description: updateTaskDto.description || task.description,
            cena: updateTaskDto.cena || task.cena
        });
        const updatedTask = await this.taskRepository.save(task);
        return updatedTask;
    }
    async delete(id) {
        await this.taskRepository.delete(id);
    }
    async findByCategory(categoryId) {
        console.log('Tasks Service - Finding tasks for category:', categoryId);
        const tasks = await this.taskRepository.find({
            relations: ['kategorija'],
            where: {
                kategorija: {
                    id: categoryId
                }
            }
        });
        console.log('Tasks Service - Found tasks:', JSON.stringify(tasks, null, 2));
        return tasks;
    }
    async findByUser(userId) {
        if (!userId) {
            throw new common_1.NotFoundException('User ID is required');
        }
        console.log('Tasks Service - Finding tasks for user:', userId);
        console.log('Tasks Service - User ID type:', typeof userId);
        try {
            const userExists = await this.userService.findById(userId);
            if (!userExists) {
                console.error('Tasks Service - User not found:', userId);
                throw new common_1.NotFoundException(`User with ID ${userId} not found`);
            }
            console.log('Tasks Service - User found:', userExists.id);
            const tasks = await this.taskRepository
                .createQueryBuilder('task')
                .leftJoinAndSelect('task.kategorija', 'kategorija')
                .leftJoinAndSelect('task.user', 'user')
                .where('user.id = :userId', { userId })
                .getMany();
            console.log('Tasks Service - Query result:', {
                userId,
                tasksFound: tasks.length,
                tasks: JSON.stringify(tasks, null, 2)
            });
            return tasks;
        }
        catch (error) {
            console.error('Error finding tasks for user:', {
                userId,
                error: error.message,
                stack: error.stack
            });
            throw error;
        }
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        kategorije_service_1.KategorijeService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map