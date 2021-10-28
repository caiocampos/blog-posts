import AuthorResponseDTO from '../../authors/dto/author-response.dto';
import { PostDocument } from '../post.entity';

export default class PostResponseDTO {
  constructor(
    public id: string,
    public title: string,
    public body: string,
    public creationDate: string,
    public author?: AuthorResponseDTO,
  ) {}

  static from = ({
    _id,
    title,
    body,
    creationDate,
    author,
  }: PostDocument): PostResponseDTO =>
    new PostResponseDTO(
      _id.toHexString(),
      title,
      body,
      creationDate,
      AuthorResponseDTO.from(author),
    );
}
