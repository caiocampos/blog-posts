import { Controller, Delete, Get, Param, Post, Request } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import PostAddRequestDTO from '../posts/dto/post-add-request.dto';
import PostResponseDTO from '../posts/dto/post-response.dto';
import { AuthorsService } from './authors.service';
import AuthorAddRequestDTO from './dto/author-add-request.dto';
import AuthorResponseDTO from './dto/author-response.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) {}

  @Get()
  findAll(): Promise<Array<AuthorResponseDTO>> {
    return this.authorsService.findAll();
  }

  @Post()
  add(@Request() requestDto: AuthorAddRequestDTO): Promise<AuthorResponseDTO> {
    return this.authorsService.add(requestDto);
  }

  @Post(':id/posts')
  addPost(
    @Param('id') id: string,
    @Request() requestDto: PostAddRequestDTO,
  ): Promise<PostResponseDTO> {
    return this.authorsService.addPost(id, requestDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.authorsService.delete(id);
  }
}
