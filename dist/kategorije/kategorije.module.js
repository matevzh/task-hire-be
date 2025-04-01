"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KategorijeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const kategorije_controller_1 = require("./kategorije.controller");
const kategorije_service_1 = require("./kategorije.service");
const kategorija_1 = require("./entities/kategorija");
let KategorijeModule = class KategorijeModule {
};
exports.KategorijeModule = KategorijeModule;
exports.KategorijeModule = KategorijeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([kategorija_1.Kategorija])],
        controllers: [kategorije_controller_1.KategorijeController],
        providers: [kategorije_service_1.KategorijeService],
        exports: [kategorije_service_1.KategorijeService]
    })
], KategorijeModule);
//# sourceMappingURL=kategorije.module.js.map