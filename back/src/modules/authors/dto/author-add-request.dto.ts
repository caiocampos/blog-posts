import { IsNotEmpty, IsDateString, IsString } from 'class-validator';
import { ValidationMessages } from '../../../common/messages/validation-messages.constants';

export default class AuthorAddRequestDTO {
  @IsString()
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  name: string;

  @IsString()
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  nickname: string;

  @IsString()
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  @IsDateString(undefined, { message: ValidationMessages.IS_NOT_EMPTY })
  birthDate: string;

  public constructor(name: string, nickname: string, birthDate: string) {
    this.name = name;
    this.nickname = nickname;
    this.birthDate = birthDate;
  }
}
