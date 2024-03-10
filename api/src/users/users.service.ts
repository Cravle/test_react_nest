import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { User } from '@prisma/client';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}
  async findAll() {
    return this.prisma.user.findMany();
  }

  async create(createUserDto: CreateUserDto) {
    const candidate = await this.prisma.user.findUnique({
      where: {
        phoneNumber: createUserDto.phoneNumber,
      },
    });

    if (candidate) {
      throw new HttpException(
        'User with this phoneNumber has already created',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await hash(
      createUserDto.password,
      Number(this.configService.get('SALT')),
    );

    const userData = {
      ...createUserDto,
      password: hashedPassword,
    };

    const user = await this.prisma.user.create({
      data: userData,
    });

    Logger.log(user, 'User created');

    return user;
  }

  createUserResponse(user: User | User[]) {
    if (Array.isArray(user)) {
      return user.map((i) => {
        const withoutPassword = i;
        delete withoutPassword.password;
        return withoutPassword;
      });
    }

    const withoutPassword = user;
    delete withoutPassword.password;
    return withoutPassword;
  }
}
