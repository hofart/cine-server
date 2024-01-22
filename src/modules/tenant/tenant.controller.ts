import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantDTO } from './dto/Tenant.dto';

@Controller('tenants')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get()
  async getAllTenants(): Promise<TenantDTO[]> {
    return this.tenantService.getAll();
  }

  @Get(':id')
  async getTenant(@Param('id') id: string): Promise<TenantDTO> {
    return this.tenantService.findOne(id);
  }

  @Post()
  async createTenant(@Body() data: TenantDTO): Promise<TenantDTO> {
    return this.tenantService.create(data);
  }

  @Put(':id')
  async editTenant(
    @Param('id') id: string,
    @Body() data: TenantDTO,
  ): Promise<TenantDTO> {
    return this.tenantService.update(id, data);
  }

  @Delete(':id')
  async deleteTenant(@Param('id') id: string): Promise<TenantDTO> {
    return this.tenantService.remove(id);
  }
}
