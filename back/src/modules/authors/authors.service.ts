import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validateOrReject } from 'class-validator';
import { DeleteResult, MongoRepository, ObjectID } from 'typeorm';
import PostAddRequestDTO from '../posts/dto/post-add-request.dto';
import PostResponseDTO from '../posts/dto/post-response.dto';
import { Post } from '../posts/post.entity';
import { Author } from './author.entity';
import AuthorAddRequestDTO from './dto/author-add-request.dto';
import AuthorResponseDTO from './dto/author-response.dto';

@Injectable()
export class AuthorsService {
  private readonly logger = new Logger(AuthorsService.name);

  constructor(
    @InjectRepository(Author)
    private readonly authorsRepository: MongoRepository<Author>,
    @InjectRepository(Post)
    private readonly postRepository: MongoRepository<Post>,
  ) {}

  async findAll(): Promise<Array<AuthorResponseDTO>> {
    const find = this.authorsRepository.find();
    const authors = await this.authorsRepository.createCursor(find).toArray();
    return authors.map(AuthorResponseDTO.from);
  }

  async findOne(id: string): Promise<AuthorResponseDTO> {
    const objectID = ObjectID.createFromHexString(id);
    const author = await this.authorsRepository.findOne(objectID);
    return AuthorResponseDTO.from(author);
  }

  async addPost(
    id: string,
    requestDto: PostAddRequestDTO,
  ): Promise<PostResponseDTO> {
    await validateOrReject(requestDto);
    const objectID = ObjectID.createFromHexString(id);
    const author = await this.authorsRepository.findOne(objectID);
    const newPost = requestDto as Post;
    newPost.author = author;
    newPost.creationDate = new Date().toISOString().slice(0, 10);
    const post = await this.postRepository.save(newPost);
    return PostResponseDTO.from(post);
  }

  async add(requestDto: AuthorAddRequestDTO): Promise<AuthorResponseDTO> {
    await validateOrReject(requestDto);
    const author = await this.authorsRepository.save(requestDto as Author);
    return AuthorResponseDTO.from(author);
  }

  async delete(id: string): Promise<DeleteResult> {
    const objectID = ObjectID.createFromHexString(id);
    return await this.authorsRepository.delete(objectID);
  }
}
