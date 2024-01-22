import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { PrismaService } from '../../db/PrismaService';

@Module({
  controllers: [RoomController],
  providers: [RoomService, PrismaService],
})
export class RoomModule {}
