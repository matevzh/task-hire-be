import { Module } from '@nestjs/common';
import { KategorijeController } from './kategorije.controller';
import { KategorijeService } from './kategorije.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kategorija } from './entities/kategorija';

@Module({
  imports: [TypeOrmModule.forFeature([Kategorija])],
  controllers: [KategorijeController],
  providers: [KategorijeService]
})
export class KategorijeModule {}
