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
exports.KategorijeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const kategorija_1 = require("./entities/kategorija");
const typeorm_2 = require("@nestjs/typeorm");
let KategorijeService = class KategorijeService {
    kategorijaRepository;
    constructor(kategorijaRepository) {
        this.kategorijaRepository = kategorijaRepository;
    }
    async findAll() {
        return this.kategorijaRepository.find();
    }
    async create(title) {
        const kategorija = this.kategorijaRepository.create({ title: title });
        return this.kategorijaRepository.save(kategorija);
    }
    async delete(id) {
        await this.kategorijaRepository.delete(id);
    }
    async update(id, title) {
        const kategorija = await this.kategorijaRepository.findOne({ where: { id: id } });
        if (!kategorija) {
            throw new common_1.NotFoundException('Category not found');
        }
        kategorija.title = title;
        return await this.kategorijaRepository.save(kategorija);
    }
    async findById(id) {
        const kategorija = await this.kategorijaRepository.findOne({ where: { id: id } });
        if (!kategorija) {
            throw new common_1.NotFoundException('Category not found');
        }
        return kategorija;
    }
};
exports.KategorijeService = KategorijeService;
exports.KategorijeService = KategorijeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(kategorija_1.Kategorija)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], KategorijeService);
//# sourceMappingURL=kategorije.service.js.map