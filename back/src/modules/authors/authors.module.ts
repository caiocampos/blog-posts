import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from '../posts/post.entity';
import { Author, AuthorSchema } from './author.entity';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
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
  providers: [AuthorsService],
  controllers: [AuthorsController],
  exports: [],
})
export class AuthorsModule {}
