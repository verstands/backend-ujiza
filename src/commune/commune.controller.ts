import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommuneService } from './commune.service';
import { CommuneDto } from 'src/dto/commune.dto';

@Controller('commune')
export class CommuneController {
    constructor(private readonly allservice: CommuneService) {}

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
  update(@Param('id') id: string, @Body() agentUpdate: CommuneDto) {
    return this.allservice.update({ id, ...agentUpdate });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.allservice.delete({ id });
  }

  @Post()
  async create(@Body() agendadto: CommuneDto) {
    return await this.allservice.create(agendadto);
  }
}
