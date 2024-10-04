import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PharmacieService } from './pharmacie.service';
import { PharmacieDto } from 'src/dto/pharmaciedto';

@Controller('pharmacie')
export class PharmacieController {
    constructor(private readonly allservice: PharmacieService) {}

  @Get()
  get() {
    return this.allservice.getAll();
  }

  @Get(':id')
  getFindOne(@Param('id') id: string) {
    return this.allservice.getFind({
      id,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() agentUpdate: PharmacieDto) {
    return this.allservice.update({ id, ...agentUpdate });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.allservice.delete({ id });
  }

  @Post()
  async create(@Body() agendadto: PharmacieDto) {
    return await this.allservice.create(agendadto);
  }
}
