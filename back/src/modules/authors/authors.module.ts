import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '../posts/post.entity';
import { Author } from './author.entity';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Post])],
  providers: [AuthorsService],
  controllers: [AuthorsController],
  exports: [],
})
export class AuthorsModule {}
