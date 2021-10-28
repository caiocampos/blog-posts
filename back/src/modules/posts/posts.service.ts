import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, MongoRepository, ObjectID } from 'typeorm';
import { Post } from './post.entity';
import PostResponseDTO from './dto/post-response.dto';

@Injectable()
export class PostsService {
  private readonly logger = new Logger(PostsService.name);

  constructor(
    @InjectRepository(Post)
    private readonly postRepository: MongoRepository<Post>,
  ) {}

  async findAll(authorName: string): Promise<Array<PostResponseDTO>> {
    let find: Promise<Array<Post>>;
    if (!authorName) {
      find = this.postRepository.find();
    } else {
      find = this.postRepository.find({
        where: { 'author.name': { $regex: authorName, $options: 'i' } },
      });
    }
    const posts = await this.postRepository.createCursor(find).toArray();
    return posts.map(PostResponseDTO.from);
  }

  async delete(id: string): Promise<DeleteResult> {
    const objectID = ObjectID.createFromHexString(id);
    return await this.postRepository.delete(objectID);
  }
}
