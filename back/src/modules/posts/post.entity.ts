import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Author, AuthorDocument } from '../authors/author.entity';

export type PostDocument = Post & Document<Types.ObjectId>;

@Schema({ collection: 'posts' })
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  body: string;

  @Prop({ required: true })
  creationDate: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Author' })
  author: AuthorDocument;
}

export const PostSchema = SchemaFactory.createForClass(Post);
