import { Component, OnInit } from '@angular/core';
import {Ghe} from '../../../Shared/ghe.model';
import {DatgheService} from '../datghe.service';

@Component({
  selector: 'app-danhsachghe',
  templateUrl: './danhsachghe.component.html',
  styleUrls: ['./danhsachghe.component.css']
})
export class DanhsachgheComponent implements OnInit {
  ghes: Ghe[];
  soGheDaDat: number;
  soGheConLai: number;
  dangSachGheDangDat = [];
  constructor(private gheService: DatgheService) { }

  ngOnInit() {
    this.ghes = this.gheService.getGhes();
    this.soGheDaDat = 0;
    this.soGheConLai = 0;

    for (let gheconlai of this.ghes) {
      if (!gheconlai.trangthai) {
        this.soGheConLai++;
      }
    }

  }
  datGheParent(value, ghe) {
    if (value) {
      this.soGheDaDat++;
      this.soGheConLai--;
      this.dangSachGheDangDat.push(ghe);
    } else {
      this.soGheDaDat--;
      this.soGheConLai++;
      for (let index in this.dangSachGheDangDat) {
        if (this.dangSachGheDangDat[index].soGhe === ghe.soGhe){
          this.dangSachGheDangDat.splice(parseInt(index), 1);
        }
      }
    }
    this.gheService.DSGheDangDat.emit(this.dangSachGheDangDat);
  }

}
