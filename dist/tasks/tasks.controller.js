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
var TasksController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const create_task_dto_1 = require("./entities/create-task.dto");
const update_task_dto_1 = require("./entities/update-task.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let TasksController = TasksController_1 = class TasksController {
    taskService;
    logger = new common_1.Logger(TasksController_1.name);
    constructor(taskService) {
        this.taskService = taskService;
    }
    async getMyTasks(req) {
        this.logger.log('Getting tasks for user:', {
            userId: req.user?.userId,
            user: req.user,
            headers: req.headers.authorization
        });
        const userId = parseInt(req.user?.userId, 10);
        if (isNaN(userId)) {
            this.logger.error('Invalid user ID:', req.user?.userId);
            throw new Error('Invalid user ID');
        }
        try {
            const tasks = await this.taskService.findByUser(userId);
            this.logger.log(`Found ${tasks.length} tasks for user ${userId}`);
            return tasks;
        }
        catch (error) {
            this.logger.error('Error in getMyTasks:', {
                userId,
                error: error.message,
                stack: error.stack
            });
            throw error;
        }
    }
    async findAll(kategorija) {
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
    }
    async findOne(id) {
        return this.taskService.findOne(+id);
    }
    async create(createTaskDto, req) {
        return this.taskService.create(createTaskDto, req.user.userId, createTaskDto.kategorijaId);
    }
    async update(id, updateTaskDto) {
        this.logger.log('Updating task:', {
            id,
            updateData: updateTaskDto
        });
        return this.taskService.update(+id, updateTaskDto);
    }
    async delete(id) {
        this.taskService.delete(+id);
    }
};
exports.TasksController = TasksController;
__decorate([
    (0, common_1.Get)('my-tasks'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getMyTasks", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('kategorija')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "delete", null);
exports.TasksController = TasksController = TasksController_1 = __decorate([
    (0, common_1.Controller)('tasks'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.SerializeOptions)({ strategy: 'excludeAll' }),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
//# sourceMappingURL=tasks.controller.js.map