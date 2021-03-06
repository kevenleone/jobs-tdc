import { Field, ID, ObjectType, registerEnumType } from 'type-graphql';
import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

enum Status {
  CREATED,
  WAITING_WINDOW,
  DISCARDED,
  IN_EXECUTION,
  COMPLETE,
}

registerEnumType(Status, {
  description: 'Status used on Service',
  name: 'Status',
});

@Entity()
@ObjectType()
export default class Service extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectID;

  @Field()
  @Column()
  orderId: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  assinedTo: string;

  @Field({ defaultValue: new Date() })
  @Column()
  createdAt: Date;

  @Field()
  @Column()
  type: string;

  @Field()
  @Column()
  description: string;

  @Field(() => Status)
  @Column()
  status: Status;

  @Field({ nullable: true })
  @Column({ nullable: true })
  statusMessage: string;
}

export { Status };
