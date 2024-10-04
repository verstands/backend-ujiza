import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { QuartierService } from './quartier.service';
import { QuartierDto } from 'src/dto/quartier.dto';

@Controller('quartier')
export class QuartierController {
    constructor(private readonly allservice: QuartierService) {}

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
  update(@Param('id') id: string, @Body() agentUpdate: QuartierDto) {
    return this.allservice.update({ id, ...agentUpdate });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.allservice.delete({ id });
  }

  @Post()
  async create(@Body() agendadto: QuartierDto) {
    return await this.allservice.create(agendadto);
  }
}
