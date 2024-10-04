import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { ProduitDto } from 'src/dto/produit.dto';

@Controller('produit')
export class ProduitController {
    constructor(private readonly allservice: ProduitService) {}

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
  update(@Param('id') id: string, @Body() agentUpdate: ProduitDto) {
    return this.allservice.update({ id, ...agentUpdate });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.allservice.delete({ id });
  }

  @Post()
  async create(@Body() agendadto: ProduitDto) {
    return await this.allservice.create(agendadto);
  }
}
