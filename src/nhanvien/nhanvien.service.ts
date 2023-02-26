import { Injectable } from '@nestjs/common';
import { userInfo } from 'os';
import { CreateNhanvienDto } from './dto/create-nhanvien.dto';
import { UpdateNhanvienDto } from './dto/update-nhanvien.dto';

const nhanvienDatabase =[
  {
  username: 'khang.phan',
  hoten: 'Phan Ngoc Dinh Khang',
  sodt: 999888777,
   phongban: 'p.SP',
   password: 'khang123'
  },
  {
    username: 'khang.phan2',
    hoten: 'Phan Ngoc Dinh Khang 2',
    sodt: 999888666,
    phongban: 'p.SP',
    password: 'khang12345'
    }
]


@Injectable()
export class NhanvienService {
  create( nhanvienData: CreateNhanvienDto) {
    nhanvienDatabase.push(nhanvienData);
    return nhanvienDatabase;
  }

  findAll() {
    return nhanvienDatabase;
 //   return `This action returns all nhanvien`;
  }

  findOne(username: string) {
    const idSearch = nhanvienDatabase.find(user => user.username === username);
    return idSearch;
  }

  update(username: string, updateNhanvienDto: UpdateNhanvienDto) {
    const username_upd =  nhanvienDatabase.find(user => user.username === username );
    username_upd.hoten = updateNhanvienDto.hoten;
    username_upd.sodt = updateNhanvienDto.sodt;
    username_upd.phongban = updateNhanvienDto.phongban;
    username_upd.password = updateNhanvienDto.password;
    return username_upd;
  }

  remove(username: string) {
    const userdata = nhanvienDatabase.filter(user => user.username !== username)
    return userdata;
  }
}
