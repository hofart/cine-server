import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/PrismaService';
import { AdministratorDTO } from './dto/Administrator.dto';

@Injectable()
export class AdministratorService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<AdministratorDTO[]> {
    return this.prisma.administrador.findMany();
  }

  async getOne(id: string): Promise<AdministratorDTO> {
    const administrator = await this.prisma.administrador.findUnique({
      where: { id_admin: parseInt(id) },
    });

    if (!administrator) throw new Error('Administrador não encontrado.');

    return administrator;
  }

  async create(data: AdministratorDTO): Promise<AdministratorDTO> {
    return this.prisma.administrador.create({ data });
  }

  async update(id: string, data: AdministratorDTO): Promise<AdministratorDTO> {
    return this.prisma.administrador.update({
      where: { id_admin: parseInt(id) },
      data,
    });
  }

  async remove(id: string): Promise<AdministratorDTO> {
    const administrator = await this.prisma.administrador.findUnique({
      where: { id_admin: parseInt(id) },
    });

    if (!administrator) throw new Error('Administrador não encontrado.');

    return this.prisma.administrador.delete({
      where: { id_admin: parseInt(id) },
    });
  }
}
