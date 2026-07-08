import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { validateOrReject } from 'class-validator';
import { Model, Types } from 'mongoose';
import { PostAddRequestDTO } from '../posts/dto/post-add-request.dto';
import { PostResponseDTO } from '../posts/dto/post-response.dto';
import { Post, PostDocument } from '../posts/post.entity';
import { Author, AuthorDocument } from './author.entity';
import { AuthorAddRequestDTO } from './dto/author-add-request.dto';
import { AuthorResponseDTO } from './dto/author-response.dto';
import { connectionName } from '../../mongoose-connection';

const { ObjectId } = Types;

@Injectable()
export class AuthorsService {
  private readonly logger = new Logger(AuthorsService.name);

  constructor(
    @InjectModel(Author.name, connectionName)
    private authorModel: Model<AuthorDocument>,
    @InjectModel(Post.name, connectionName)
    private postModel: Model<PostDocument>,
  ) {}

  async count(): Promise<number> {
    try {
      return await this.authorModel.countDocuments().exec();
    } catch (error) {
      const msg = 'Erro ao contar os autores';
      this.logger.error(msg, error);
      throw new BadRequestException(msg);
    }
  }

  async findAll(): Promise<Array<AuthorResponseDTO>> {
    try {
      const authors = await this.authorModel.find().exec();
      return authors.map(AuthorResponseDTO.from);
    } catch (error) {
      const msg = 'Erro ao buscar os autores';
      this.logger.error(msg, error);
      throw new BadRequestException(msg);
    }
  }

  async findOne(id: string): Promise<AuthorResponseDTO | null> {
    try {
      const _id = new ObjectId(id);
      const author = await this.authorModel.findById(_id).exec();
      if (author === null) {
        return null;
      }
      return AuthorResponseDTO.from(author);
    } catch (error) {
      const msg = 'Erro ao buscar o autor';
      this.logger.error(msg, error);
      throw new BadRequestException(msg);
    }
  }

  async add(requestDto: AuthorAddRequestDTO): Promise<AuthorResponseDTO> {
    await validateOrReject(requestDto);
    try {
      const newAuthor = new this.authorModel();
      newAuthor.realname = requestDto.name;
      newAuthor.nickname = requestDto.nickname;
      newAuthor.birthDate = requestDto.birthDate;
      const author = await newAuthor.save();
      return AuthorResponseDTO.from(author);
    } catch (error) {
      const msg = 'Erro ao gravar o autor';
      this.logger.error(msg, error);
      throw new BadRequestException(msg);
    }
  }

  async addPost(
    id: string,
    requestDto: PostAddRequestDTO,
  ): Promise<PostResponseDTO> {
    await validateOrReject(requestDto);
    try {
      const newPost = new this.postModel(requestDto as Post);
      const _id = new ObjectId(id);
      const author = await this.authorModel.findById(_id).exec();
      if (author === null) {
        const msg = 'Erro ao gravar a postagem, author não encontrado';
        this.logger.error(msg);
        throw new BadRequestException(msg);
      }
      newPost.author = author;
      newPost.creationDate = new Date().toISOString().slice(0, 10);
      const post = await newPost.save();
      return PostResponseDTO.from(post);
    } catch (error) {
      const msg = 'Erro ao gravar a postagem';
      this.logger.error(msg, error);
      throw new BadRequestException(msg);
    }
  }

  async delete(id: string) {
    try {
      const _id = new ObjectId(id);
      await this.postModel.deleteMany({ author: { $eq: _id } }).exec();
      return await this.authorModel.findByIdAndDelete(_id).exec();
    } catch (error) {
      const msg = 'Erro ao apagar o autor';
      this.logger.error(msg, error);
      throw new BadRequestException(msg);
    }
  }
}
