import { IsNotEmpty, IsDateString } from 'class-validator';
import { ValidationMessages } from '../../../common/messages/validation-messages.constants';

export default class AuthorAddRequestDTO {
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  name: string;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  nickname: string;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  @IsDateString({}, { message: ValidationMessages.IS_NOT_EMPTY })
  birthDate: string;

  public constructor(name: string, nickname: string, birthDate: string) {
    this.name = name;
    this.nickname = nickname;
    this.birthDate = birthDate;
  }
}
