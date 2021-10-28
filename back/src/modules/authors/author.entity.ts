import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model, Types } from 'mongoose';
import { Post, PostDocument } from '../posts/post.entity';

export type AuthorDocument = Author & Document<Types.ObjectId>;

@Schema({ collection: 'authors' })
export class Author {
  @Prop({ nullable: false })
  name: string;

  @Prop({ nullable: false })
  nickname: string;

  @Prop()
  birthDate: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Post' }] })
  posts: Array<PostDocument>;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
