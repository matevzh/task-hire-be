import { Repository } from 'typeorm';
import { Kategorija } from './entities/kategorija';
export declare class KategorijeService {
    private readonly kategorijaRepository;
    constructor(kategorijaRepository: Repository<Kategorija>);
    findAll(): Promise<Kategorija[]>;
    create(title: string): Promise<Kategorija>;
    delete(id: number): Promise<void>;
    update(id: number, title: string): Promise<Kategorija>;
    findById(id: number): Promise<Kategorija>;
}
