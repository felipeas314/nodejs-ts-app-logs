import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { IsDefined,MinLength } from "class-validator";

import UserRole from '../enum/UserRole';

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsDefined()
    @MinLength(6)
    name: string;

    @Column()
    email: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.PEOPLE,
    })
    role: UserRole

    @Column({
        name:"is_active"
    })
    isActive: boolean;

}