import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 32)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 10)
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  maskedPhoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(6, 12)
  @Matches(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,12}$/, {
    message: 'Password too weak',
  })
  password: string;
}
