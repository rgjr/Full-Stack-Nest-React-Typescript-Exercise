import { Injectable } from '@nestjs/common';
import { PrismaService } from 'server/prisma/prisma.service';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findFirstOrThrow({
      where: { email },
    });
  }
}
