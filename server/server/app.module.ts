import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { InvoicesModule } from './invoices/invoices.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, InvoicesModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtService],
  exports: [AuthService],
})
export class AppModule {}
