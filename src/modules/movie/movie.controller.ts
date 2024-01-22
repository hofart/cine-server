import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDTO } from './dto/Movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getAllMovies(): Promise<MovieDTO[]> {
    return this.movieService.getAll();
  }

  @Get(':id')
  async getMovie(@Param('id') id: string): Promise<MovieDTO> {
    return this.movieService.getOne(id);
  }

  @Post()
  async createMovie(@Body() data: MovieDTO): Promise<MovieDTO> {
    return this.movieService.create(data);
  }

  @Put(':id')
  async editMovie(
    @Param('id') id: string,
    @Body() data: MovieDTO,
  ): Promise<MovieDTO> {
    return this.movieService.update(id, data);
  }

  @Delete(':id')
  async deleteMovie(@Param('id') id: string): Promise<MovieDTO> {
    return this.movieService.remove(id);
  }
}
