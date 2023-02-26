import { Module } from '@nestjs/common';
import { NhanvienService } from './nhanvien.service';
import { NhanvienController } from './nhanvien.controller';

@Module({
  controllers: [NhanvienController],
  providers: [NhanvienService]
})
export class NhanvienModule {}
