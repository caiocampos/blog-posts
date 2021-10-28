import { AuthorDocument } from '../author.entity';

export default class AuthorResponseDTO {
  constructor(
    public id: string,
    public name: string,
    public nickname: string,
    public birthDate: string,
    public posts?: Array<any>,
  ) {}

  static from = ({
    _id,
    name,
    nickname,
    birthDate,
    posts,
  }: AuthorDocument): AuthorResponseDTO =>
    new AuthorResponseDTO(_id.toHexString(), name, nickname, birthDate, posts);
}
