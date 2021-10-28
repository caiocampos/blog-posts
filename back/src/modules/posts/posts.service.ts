import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { PostDocument } from './post.entity';
import PostResponseDTO from './dto/post-response.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { AuthorDocument } from '../authors/author.entity';

@Injectable()
export class PostsService {
  private readonly logger = new Logger(PostsService.name);

  constructor(
    @InjectModel('Author') private authorModel: Model<AuthorDocument>,
    @InjectModel('Post') private postModel: Model<PostDocument>,
  ) {}

  async findAll(authorName: string): Promise<Array<PostResponseDTO>> {
    try {
      let query = this.postModel.find();
      if (authorName) {
        const authors = await this.authorModel
          .find()
          .where('name')
          .regex(new RegExp(authorName, 'i'))
          .select('id')
          .exec();
        query = query.where('author').in(authors.map((author) => author._id));
      }
      const posts = await query.populate('author').sort('-creationDate').exec();
      this.postModel.hydrate;
      return posts.map(PostResponseDTO.from);
    } catch (error) {
      throw new HttpException(
        'Erro ao buscar as postagens',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: string) {
    try {
      const _id = new Types.ObjectId(id);
      return await this.postModel.findByIdAndDelete(_id).exec();
    } catch (error) {
      throw new HttpException(
        'Erro ao apagar a postagem',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
