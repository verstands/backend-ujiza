import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PaysService } from './pays.service';
import { PaysDto } from 'src/dto/pays.dto';

@Controller('pays')
export class PaysController {
    constructor(private readonly allservice: PaysService) {}

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
  update(@Param('id') id: string, @Body() agentUpdate: PaysDto) {
    return this.allservice.update({ id, ...agentUpdate });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.allservice.delete({ id });
  }

  @Post()
  async create(@Body() agendadto: PaysDto) {
    return await this.allservice.create(agendadto);
  }
}
