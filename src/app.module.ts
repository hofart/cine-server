import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TenantModule } from './modules/tenant/tenant.module';
import { AdministratorModule } from './modules/administrator/administrator.module';
import { RoomModule } from './modules/room/room.module';
import { MovieModule } from './modules/movie/movie.module';

@Module({
  controllers: [],
  providers: [],
  imports: [UserModule, TenantModule, AdministratorModule, RoomModule, MovieModule],
})
export class AppModule {}
