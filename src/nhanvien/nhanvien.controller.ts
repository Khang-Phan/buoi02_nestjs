import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NhanvienService } from './nhanvien.service';
import { CreateNhanvienDto } from './dto/create-nhanvien.dto';
import { UpdateNhanvienDto } from './dto/update-nhanvien.dto';
//import { nhanvienDatabase } from './nhanvien.service';
@Controller('nhanvien')
export class NhanvienController {
  constructor(private readonly nhanvienService: NhanvienService) {}

  @Post()
  create(@Body() createNhanvienDto: CreateNhanvienDto) {
    return this.nhanvienService.create(createNhanvienDto);
  }

  @Get()
  findAll() {
    return this.nhanvienService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.nhanvienService.findOne(username);
  }

  @Post('update/:username')
  update(@Param('username') username: string, @Body() updateNhanvienDto: UpdateNhanvienDto) {
    return this.nhanvienService.update(username, updateNhanvienDto);
  }

  @Post('delete/:username')
  remove(@Param('username') username: string) {
    return this.nhanvienService.remove(username);
  }
}
