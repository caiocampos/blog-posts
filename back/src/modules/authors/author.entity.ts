import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { PostDocument } from '../posts/post.entity';

export type AuthorDocument = Author & Document<Types.ObjectId>;

@Schema({ collection: 'authors' })
export class Author {
  @Prop({ required: true, type: String })
  realname: string;

  @Prop({ required: true, type: String })
  nickname: string;

  @Prop({ required: true, type: String })
  birthDate: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Post' }] })
  posts: Array<PostDocument>;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
