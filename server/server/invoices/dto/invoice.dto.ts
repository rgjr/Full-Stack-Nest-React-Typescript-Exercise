/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsBoolean, IsDate } from 'class-validator';
export class InvoiceDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  vendor_name: string;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsDate()
  due_date: Date;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsBoolean()
  paid: boolean;
}
