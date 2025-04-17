import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.invoice.findMany();
  }

  findOne(id: number) {
    return this.prisma.invoice.findUnique({
      where: { id },
    });
  }
}
