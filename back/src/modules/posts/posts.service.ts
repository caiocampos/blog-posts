import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Post, PostDocument } from './post.entity';
import { PostResponseDTO } from './dto/post-response.dto';
import { Author, AuthorDocument } from '../authors/author.entity';
import { connectionName } from '../../mongoose-connection';

@Injectable()
export class PostsService {
  private readonly logger = new Logger(PostsService.name);

  constructor(
    @InjectModel(Author.name, connectionName)
    private authorModel: Model<AuthorDocument>,
    @InjectModel(Post.name, connectionName)
    private postModel: Model<PostDocument>,
  ) {}

  async findAll(authorName?: string): Promise<Array<PostResponseDTO>> {
    try {
      let query = this.postModel.find();
      if (authorName) {
        const authors = await this.authorModel
          .find()
          .where('realname')
          .regex(new RegExp(authorName, 'i'))
          .select('id')
          .exec();
        query = query.where('author').in(authors.map((author) => author._id));
      }
      const posts = await query.populate('author').sort('-creationDate').exec();
      return posts.map(PostResponseDTO.from);
    } catch (error) {
      const msg = 'Erro ao buscar as postagens';
      console.error(msg, error);
      throw new BadRequestException(msg);
    }
  }

  async delete(id: string) {
    try {
      const _id = new Types.ObjectId(id);
      return await this.postModel.findByIdAndDelete(_id).exec();
    } catch (error) {
      const msg = 'Erro ao apagar a postagem';
      console.error(msg, error);
      throw new BadRequestException(msg);
    }
  }
}
