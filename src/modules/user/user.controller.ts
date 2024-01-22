import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/User.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserDTO[]> {
    return this.userService.getAll();
  }

  @Get('user/:id')
  async getUser(@Param('id') id: string): Promise<UserDTO> {
    return this.userService.getOne(id);
  }

  @Post()
  async createUser(@Body() data: UserDTO): Promise<UserDTO> {
    return this.userService.create(data);
  }

  @Put('user/:id')
  async editUser(
    @Param('id') id: string,
    @Body() data: UserDTO,
  ): Promise<UserDTO> {
    return this.userService.update(id, data);
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') id: string): Promise<UserDTO> {
    return this.userService.remove(id);
  }
}
