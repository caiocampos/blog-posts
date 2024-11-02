import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from '../authors/author.entity';
import { PostSchema } from './post.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { connectionName } from '../../mongoose-connection';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: 'Author', schema: AuthorSchema },
        { name: 'Post', schema: PostSchema },
      ],
      connectionName,
    ),
  ],
  providers: [PostsService],
  controllers: [PostsController],
  exports: [],
})
export class PostsModule {}
