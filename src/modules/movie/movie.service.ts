import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/PrismaService';
import { MovieDTO } from './dto/Movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<MovieDTO[]> {
    return this.prisma.filme.findMany();
  }

  async getOne(id: string): Promise<MovieDTO> {
    const movie = await this.prisma.filme.findUnique({
      where: { id_filme: parseInt(id) },
    });

    if (!movie) throw new Error(`Filme não encontrado.`);

    return movie;
  }

  async create(data: MovieDTO): Promise<MovieDTO> {
    return this.prisma.filme.create({ data });
  }

  async update(id: string, data: any): Promise<MovieDTO> {
    const movie = await this.prisma.filme.findUnique({
      where: { id_filme: parseInt(id) },
    });

    if (!movie) throw new Error(`Filme não encontrado.`);

    return this.prisma.filme.update({
      where: { id_filme: parseInt(id) },
      data,
    });
  }

  async remove(id: string): Promise<MovieDTO> {
    const movie = await this.prisma.filme.findUnique({
      where: { id_filme: parseInt(id) },
    });

    if (!movie) throw new Error(`Filme não encontrado.`);

    return this.prisma.filme.delete({
      where: { id_filme: parseInt(id) },
    });
  }
}
