import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { TaskStatus } from "./task-status.enum";

@Entity()
export class Task extends BaseEntity{
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    desription: string;

    @Column()
    status: TaskStatus;

}