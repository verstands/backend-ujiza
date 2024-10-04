import { Injectable } from '@nestjs/common';
import { PharmacieDto } from 'src/dto/pharmaciedto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PharmacieService {
  constructor(private readonly prismaservice: PrismaService) {}

  async getAll() {
    const getall = await this.prismaservice.pharmacices.findMany({
      orderBy : {
        id : "desc"
      },
      include : {
          qurtier : true
      }
    }); 
    return { data: getall };
  }

  async getFind({ id }: { id: string }) {
    const getid = await this.prismaservice.pharmacices.findUnique({ 
      where: {
        id,
      },
    });
    return { data: getid };
  }

  async update({ id, ...agentUpdate }: { id: string } & PharmacieDto) {
    const updatedAgent = await this.prismaservice.pharmacices.update({
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
    await this.prismaservice.pharmacices.delete({
      where: {
        id,
      },
    });
    return { message: 'pharmacie supprimé avec success ' };
  }

  async create(dataall: PharmacieDto) {
    const createAgent = await this.prismaservice.pharmacices.create({
      data:  dataall
    });
    return createAgent;
  }
}
