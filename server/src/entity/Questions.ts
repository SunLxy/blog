import {
  Entity,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectId,
} from 'typeorm'

@Entity()
export class Questions {
  @ObjectIdColumn()
  id: ObjectId

  @Column()
  title: string

  @Column()
  type: string

  @Column()
  content: string

  @CreateDateColumn()
  createTime: string

  @UpdateDateColumn()
  updateTime: string
}
