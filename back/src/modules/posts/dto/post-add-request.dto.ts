import { IsNotEmpty, IsString } from 'class-validator';
import { ValidationMessages } from '../../../common/messages/validation-messages.constants';

export class PostAddRequestDTO {
  @IsString()
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  title!: string;

  @IsString()
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  body!: string;
}
