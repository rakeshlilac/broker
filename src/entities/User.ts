import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
    PrimaryGeneratedColumn
} from 'typeorm';

import { Person } from './utils/Person';

@Entity('user')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
	id: number;
	@Column({
	
		nullable:false
	})
	user_name: string;

    @Column({
		
		nullable:false
	})
	first_name: string;
    @Column({
		
		nullable:false
	})
	last_name: string;

    @Column({
	
		nullable:false
	})
	password: string;

    @Column({
		
		nullable:false
	})
	work_email: string;

	@Column({
		name: 'active',
		default: true,
	})
	is_active: boolean;

	

	

    

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
	
}