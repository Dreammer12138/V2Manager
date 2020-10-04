import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Config {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    UUID: string;

    @Column()
    V2rayCorePath: string;

    @Column()
    V2rayLogPath: string;

    @Column()
    V2rayLogLevel: string;

    @Column()
    ListenPort: string;

    @Column()
    Protocol: string;

}
