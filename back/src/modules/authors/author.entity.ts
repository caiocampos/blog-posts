import { Column, Entity, ObjectIdColumn, ObjectID, OneToMany } from 'typeorm';
import { Post } from '../posts/post.entity';

@Entity({ name: 'authors' })
export class Author {
  @ObjectIdColumn() id: ObjectID;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  nickname: string;

  @Column({ nullable: false })
  birthDate: string;

  @OneToMany(() => Post, (post: Post) => post.author)
  posts?: Array<Post>;
}
