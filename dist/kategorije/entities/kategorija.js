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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kategorija = void 0;
const task_1 = require("../../tasks/entities/task");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
let Kategorija = class Kategorija {
    id;
    title;
    tasks;
};
exports.Kategorija = Kategorija;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], Kategorija.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Kategorija.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => task_1.Task, (task) => task.kategorija),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], Kategorija.prototype, "tasks", void 0);
exports.Kategorija = Kategorija = __decorate([
    (0, typeorm_1.Entity)('kategorije')
], Kategorija);
//# sourceMappingURL=kategorija.js.map