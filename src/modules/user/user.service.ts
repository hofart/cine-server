import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/User.dto';
import { PrismaService } from '../../db/PrismaService';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<UserDTO[]> {
    return this.prisma.usuario.findMany();
  }

  async getOne(id: string): Promise<UserDTO> {
    const user = await this.prisma.usuario.findUnique({
      where: { id_usuario: parseInt(id) },
    });

    if (!user) throw new Error('Usuário não encontrado.');

    return user;
  }

  async create(data: UserDTO): Promise<UserDTO> {
    const user = await this.prisma.usuario.create({ data });
    return user;
  }

  async update(id: string, data: UserDTO): Promise<UserDTO> {
    return this.prisma.usuario.update({
      where: { id_usuario: parseInt(id) },
      data,
    });
  }

  async remove(id: string): Promise<UserDTO> {
    const user = await this.prisma.usuario.findUnique({
      where: { id_usuario: parseInt(id) },
    });

    if (!user) throw new Error('Usuário não encontrado!');

    return this.prisma.usuario.delete({
      where: { id_usuario: parseInt(id) },
    });
  }
}
