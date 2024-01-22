import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/PrismaService';
import { RoomDTO } from './dto/Room.dto';

@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<RoomDTO[]> {
    return this.prisma.sala.findMany();
  }

  async getOne(id: string): Promise<RoomDTO> {
    const room = await this.prisma.sala.findUnique({
      where: { id_sala: parseInt(id) },
    });

    if (!room) throw new Error(`Sala não encontrada.`);

    return room;
  }

  async create(data: RoomDTO): Promise<RoomDTO> {
    return this.prisma.sala.create({ data });
  }

  async update(id: string, data: RoomDTO): Promise<RoomDTO> {
    return this.prisma.sala.update({
      where: { id_sala: parseInt(id) },
      data,
    });
  }

  async remove(id: string): Promise<RoomDTO> {
    const room = await this.prisma.sala.findUnique({
      where: { id_sala: parseInt(id) },
    });

    if (!room) throw new Error(`Sala não encontrada.`);

    return this.prisma.sala.delete({
      where: { id_sala: parseInt(id) },
    });
  }
}
