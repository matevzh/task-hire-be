import { User } from '../../users/entity/user.entity';
import { Kategorija } from 'src/kategorije/entities/kategorija';
export declare class Task {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    cena: number;
    kategorija: Kategorija;
    user: User;
}
