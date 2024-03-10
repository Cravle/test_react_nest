import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  async findAll() {
    const users = await this.usersService.findAll();

    return this.usersService.createUserResponse(users);
  }

  @Post('/')
  async create(@Body() userDto: CreateUserDto) {
    const user = await this.usersService.create(userDto);

    return this.usersService.createUserResponse(user);
  }
}
