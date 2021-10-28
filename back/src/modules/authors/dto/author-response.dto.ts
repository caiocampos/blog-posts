import { Author } from '../author.entity';

export default class AuthorResponseDTO {
  constructor(
    public id: string,
    public name: string,
    public nickname: string,
    public birthDate: string,
    public posts?: Array<any>,
  ) {}

  static from = ({
    id,
    name,
    nickname,
    birthDate,
    posts,
  }: Author): AuthorResponseDTO =>
    new AuthorResponseDTO(id.toHexString(), name, nickname, birthDate, posts);
}
