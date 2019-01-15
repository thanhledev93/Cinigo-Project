import { Component, OnInit } from '@angular/core';
import {RapchieuService} from '../../trangchu/rapchieu/rapchieu.service';
import {ActivatedRoute} from '@angular/router';
import {Phim} from '../../trangchu/films/phim.model';
import {PhimService} from '../../trangchu/films/phim.service';
import {DatgheService} from '../datghe.service';
import {Ghe} from '../../../Shared/ghe.model';

@Component({
  selector: 'app-thongtin-datve',
  templateUrl: './thongtin-datve.component.html',
  styleUrls: ['./thongtin-datve.component.css']
})
export class ThongtinDatveComponent implements OnInit {
  phim: Phim;
  ghedangdat: Ghe[];
  tong = 0;
  constructor(private phimService: PhimService, private datgheService: DatgheService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.phim = this.phimService.getPhim()[id];
    this.datgheService.DSGheDangDat.subscribe(
      (ghes: Ghe[]) => {
        this.ghedangdat = ghes;
        let tonggia = 0;
        for (const ghe of ghes) {
          tonggia += ghe.Gia;
        }
        this.tong = tonggia;
      }
    );
  }
}
