import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VilleService } from './ville.service';
import { VilleDto } from 'src/dto/ville.dto';

@Controller('ville')
export class VilleController {
    constructor(private readonly allservice: VilleService) {}

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
  update(@Param('id') id: string, @Body() agentUpdate: VilleDto) {
    return this.allservice.update({ id, ...agentUpdate });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.allservice.delete({ id });
  }

  @Post()
  async create(@Body() agendadto: VilleDto) {
    return await this.allservice.create(agendadto);
  }
}
