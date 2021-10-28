import AuthorResponseDTO from '../../authors/dto/author-response.dto';
import { Post } from '../post.entity';

export default class PostResponseDTO {
  constructor(
    public id: string,
    public title: string,
    public body: string,
    public creationDate: string,
    public author?: AuthorResponseDTO,
  ) {}

  static from = ({
    id,
    title,
    body,
    creationDate,
    author,
  }: Post): PostResponseDTO =>
    new PostResponseDTO(
      id.toHexString(),
      title,
      body,
      creationDate,
      AuthorResponseDTO.from(author),
    );
}
