import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { AuthorDocument } from '../authors/author.entity';

export type PostDocument = Post & Document<Types.ObjectId>;

@Schema({ collection: 'posts' })
export class Post {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: String })
  body: string;

  @Prop({ required: true, type: String })
  creationDate: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Author' })
  author: AuthorDocument;
}

export const PostSchema = SchemaFactory.createForClass(Post);
