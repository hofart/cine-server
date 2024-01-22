import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomDTO } from './dto/Room.dto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  async getAllRooms(): Promise<RoomDTO[]> {
    return this.roomService.getAll();
  }

  @Get(':id')
  async getRoom(@Param('id') id: string): Promise<RoomDTO> {
    return this.roomService.getOne(id);
  }

  @Post()
  async createRoom(@Body() data: RoomDTO): Promise<RoomDTO> {
    return this.roomService.create(data);
  }

  @Put(':id')
  async editRoom(
    @Param('id') id: string,
    @Body() data: RoomDTO,
  ): Promise<RoomDTO> {
    return this.roomService.update(id, data);
  }

  @Delete(':id')
  async deleteRoom(@Param('id') id: string): Promise<RoomDTO> {
    return this.roomService.remove(id);
  }
}
