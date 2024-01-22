import { Module } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { AdministratorController } from './administrator.controller';
import { PrismaService } from '../../db/PrismaService';

@Module({
  controllers: [AdministratorController],
  providers: [AdministratorService, PrismaService],
})
export class AdministratorModule {}
