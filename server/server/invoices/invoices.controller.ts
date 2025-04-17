import { Controller, Get, Body, Param } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('invoices')
@ApiTags('Invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  findAll() {
    return this.invoicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoicesService.findOne(+id);
  }
}
