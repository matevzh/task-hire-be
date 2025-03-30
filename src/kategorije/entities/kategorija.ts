import { Task } from 'src/tasks/entities/task';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kategorije')
export class Kategorija {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;

    @OneToMany(() => Task, (task) => task.kategorija)
    tasks: Task[];
}