import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import PostAddRequestDTO from '../posts/dto/post-add-request.dto';
import PostResponseDTO from '../posts/dto/post-response.dto';
import { AuthorsService } from './authors.service';
import AuthorAddRequestDTO from './dto/author-add-request.dto';
import AuthorResponseDTO from './dto/author-response.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) {}

  @Get('count')
  count(): Promise<number> {
    return this.authorsService.count();
  }

  @Get()
  findAll(): Promise<Array<AuthorResponseDTO>> {
    return this.authorsService.findAll();
  }

  @Post()
  @HttpCode(201)
  add(@Body() requestDto: AuthorAddRequestDTO): Promise<AuthorResponseDTO> {
    return this.authorsService.add(requestDto);
  }

  @Post(':id/posts')
  @HttpCode(201)
  addPost(
    @Param('id') id: string,
    @Body() requestDto: PostAddRequestDTO,
  ): Promise<PostResponseDTO> {
    return this.authorsService.addPost(id, requestDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.authorsService.delete(id);
  }
}
