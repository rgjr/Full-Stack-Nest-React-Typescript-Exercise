import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../server/generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient {}
