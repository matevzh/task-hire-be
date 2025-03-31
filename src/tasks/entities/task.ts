import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entity/user.entity';  
import { Kategorija } from 'src/kategorije/entities/kategorija';

@Entity('tasks') //ime tabele
export class Task {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @Column('decimal')
    cena: number;


    @ManyToOne(() => Kategorija, (kategorija) => kategorija.tasks)
    @JoinColumn({ name: 'kategorijaId' })
    kategorija: Kategorija;

    @ManyToOne(() => User, (user) => user.tasks, { nullable: false })
    @JoinColumn({ name: 'user_id' })
    user: User;
}