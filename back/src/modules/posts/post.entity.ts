import { Column, Entity, ObjectIdColumn, ObjectID, ManyToOne } from 'typeorm';
import { Author } from '../authors/author.entity';

@Entity({ name: 'posts' })
export class Post {
  @ObjectIdColumn() id: ObjectID;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  body: string;

  @Column({ nullable: false })
  creationDate: string;

  @ManyToOne(() => Author, (author: Author) => author.posts)
  author: Author;
}
