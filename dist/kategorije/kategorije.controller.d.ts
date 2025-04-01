import { KategorijeService } from './kategorije.service';
import { Kategorija } from './entities/kategorija';
export declare class KategorijeController {
    private readonly kategorijaService;
    constructor(kategorijaService: KategorijeService);
    findAll(): Promise<Kategorija[]>;
    create(title: string): Promise<Kategorija>;
    update(id: string, title: string): Promise<Kategorija>;
    delete(id: string): Promise<void>;
}
