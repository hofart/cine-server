// tenant/tenant.service.ts
import { Injectable } from '@nestjs/common';
import { TenantDTO } from './dto/Tenant.dto';
import { PrismaService } from '../../db/PrismaService';

@Injectable()
export class TenantService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<TenantDTO[]> {
    return this.prisma.tenant.findMany();
  }

  async findOne(id: string): Promise<TenantDTO> {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: parseInt(id) },
    });

    if (!tenant) throw new Error('Tenant não encontrado.');

    return tenant;
  }

  async create(data: TenantDTO): Promise<TenantDTO> {
    return this.prisma.tenant.create({ data });
  }

  async update(id: string, data: TenantDTO): Promise<TenantDTO> {
    return this.prisma.tenant.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async remove(id: string): Promise<TenantDTO> {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: parseInt(id) },
    });

    if (!tenant) throw new Error('Tenant não encontrado.');

    return this.prisma.tenant.delete({
      where: { id: parseInt(id) },
    });
  }
}
