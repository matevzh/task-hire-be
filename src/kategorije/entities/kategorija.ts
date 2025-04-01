import { Task } from 'src/tasks/entities/task';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
<<<<<<< HEAD
import { Expose, Exclude } from 'class-transformer';
=======
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110

@Entity('kategorije')
export class Kategorija {
    @PrimaryGeneratedColumn()
<<<<<<< HEAD
    @Expose()
    id: number;
    @Column()
    @Expose()
    title: string;

    @OneToMany(() => Task, (task) => task.kategorija)
    @Exclude()
=======
    id: number;
    @Column()
    title: string;

    @OneToMany(() => Task, (task) => task.kategorija)
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
    tasks: Task[];
}