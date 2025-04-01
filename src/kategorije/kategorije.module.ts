import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { KategorijeController } from './kategorije.controller';
import { KategorijeService } from './kategorije.service';
import { Kategorija } from './entities/kategorija';

@Module({
    imports: [TypeOrmModule.forFeature([Kategorija])],
    controllers: [KategorijeController],
    providers: [KategorijeService],
    exports: [KategorijeService]
=======
import { KategorijeController } from './kategorije.controller';
import { KategorijeService } from './kategorije.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kategorija } from './entities/kategorija';

@Module({
  imports: [TypeOrmModule.forFeature([Kategorija])],
  controllers: [KategorijeController],
  providers: [KategorijeService],
  exports: [KategorijeService]
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
})
export class KategorijeModule {}
