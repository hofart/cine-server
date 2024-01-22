import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { AdministratorDTO } from './dto/Administrator.dto';

@Controller('admin')
export class AdministratorController {
  constructor(private readonly administratorService: AdministratorService) {}

  @Get()
  async getAllAdmin(): Promise<AdministratorDTO[]> {
    return this.administratorService.getAll();
  }

  @Get(':id')
  async getAdmin(@Param('id') id: string): Promise<AdministratorDTO> {
    return this.administratorService.getOne(id);
  }

  @Post()
  async createAdmin(@Body() data: AdministratorDTO): Promise<AdministratorDTO> {
    return this.administratorService.create(data);
  }

  @Put(':id')
  async editAdmin(
    @Param('id') id: string,
    @Body() data: AdministratorDTO,
  ): Promise<AdministratorDTO> {
    return this.administratorService.update(id, data);
  }

  @Delete(':id')
  async deleteAdmin(@Param('id') id: string): Promise<AdministratorDTO> {
    return this.administratorService.remove(id);
  }
}
