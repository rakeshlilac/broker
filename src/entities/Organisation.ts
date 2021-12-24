import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
    PrimaryGeneratedColumn
} from 'typeorm';


@Entity('organisation')
export class Organisation extends BaseEntity {
    @PrimaryGeneratedColumn()
	id: number;
	@Column({
	
		nullable:false
	})
	organization_name: string;

    @Column({
		
		nullable:false
	})
	address_1: string;
    @Column({
		
		nullable:false
	})
	address_2: string;

    @Column({
	
		nullable:false
	})
	pin_code: string;

    @Column({
		
		nullable:false
	})
	office_email: string;

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