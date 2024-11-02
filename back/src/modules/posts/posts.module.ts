import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from '../authors/author.entity';
import { Post, PostSchema } from './post.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { connectionName } from '../../mongoose-connection';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: Author.name, schema: AuthorSchema },
        { name: Post.name, schema: PostSchema },
      ],
      connectionName,
    ),
  ],
  providers: [PostsService],
  controllers: [PostsController],
  exports: [],
})
export class PostsModule {}
