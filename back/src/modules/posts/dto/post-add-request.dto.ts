import { IsNotEmpty } from 'class-validator';
import { ValidationMessages } from '../../../common/messages/validation-messages.constants';

export default class PostAddRequestDTO {
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  title: string;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  body: string;

  public constructor(title: string, body: string) {
    this.title = title;
    this.body = body;
  }
}
