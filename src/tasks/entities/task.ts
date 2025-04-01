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
<<<<<<< HEAD
import { Expose } from 'class-transformer';
=======
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110

@Entity('tasks') //ime tabele
export class Task {
    @PrimaryGeneratedColumn()
<<<<<<< HEAD
    @Expose()
    id: number;
    @Column()
    @Expose()
    title: string;
    @Column()
    @Expose()
    description: string;
    @CreateDateColumn()
    @Expose()
    createdAt: Date;
    @UpdateDateColumn()
    @Expose()
    updatedAt: Date;
    @Column('decimal', { precision: 10, scale: 2 })
    @Expose()
    cena: number;

    @ManyToOne(() => Kategorija, (kategorija) => kategorija.tasks, { eager: true })
    @JoinColumn({ name: 'kategorijaId' })
    @Expose()
=======
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
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
    kategorija: Kategorija;

    @ManyToOne(() => User, (user) => user.tasks, { nullable: false })
    @JoinColumn({ name: 'user_id' })
<<<<<<< HEAD
    @Expose()
=======
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
    user: User;
}