import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NhanvienModule } from './nhanvien/nhanvien.module';

@Module({
  imports: [NhanvienModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
