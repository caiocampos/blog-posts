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

  public constructor(
    realname: string,
    nickname: string,
    birthDate: string,
    posts: Array<PostDocument>,
  ) {
    this.realname = realname;
    this.nickname = nickname;
    this.birthDate = birthDate;
    this.posts = posts;
  }
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
