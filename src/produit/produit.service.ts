import { Injectable } from '@nestjs/common';
import { ProduitDto } from 'src/dto/produit.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProduitService {
    constructor(private readonly prismaservice: PrismaService) {}

  async getAll() {
    const getall = await this.prismaservice.produits.findMany({
      orderBy : {
        id : "desc"
      },
    });
    return { data: getall };
  }

  async getFind({ id }: { id: string }) {
    const getid = await this.prismaservice.produits.findUnique({
      where: {
        id,
      },
    });
    return { data: getid };
  }

  async update({ id, ...agentUpdate }: { id: string } & ProduitDto) {
    const updatedAgent = await this.prismaservice.produits.update({
      where: {
        id,
      },
      data: {
        ...agentUpdate,
      },
    });
    return updatedAgent;
  }

  async delete({ id }: { id: string }) {
    await this.prismaservice.produits.delete({
      where: {
        id,
      },
    });
    return { message: 'pharmacie supprimé avec success ' };
  }

  async create(dataall: ProduitDto) {
    const createAgent = await this.prismaservice.produits.create({
      data:  dataall
    });
    return createAgent;
  }
}
