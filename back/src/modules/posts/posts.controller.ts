import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { PostsService } from './posts.service';
import PostResponseDTO from './dto/post-response.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  findAll(
    @Query('authorName') authorName: string,
  ): Promise<Array<PostResponseDTO>> {
    return this.postsService.findAll(authorName);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.postsService.delete(id);
  }
}
