import { Component, OnInit } from '@angular/core';
import {Phim} from '../../trangchu/films/phim.model';
import {PhimService} from '../../trangchu/films/phim.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-thongtin-phim',
  templateUrl: './thongtin-phim.component.html',
  styleUrls: ['./thongtin-phim.component.css']
})
export class ThongtinPhimComponent implements OnInit {
  maphim: number;
  phimItem: Phim;
  constructor(private phimService: PhimService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.maphim = +this.route.snapshot.params['id'];
    for (const phimitem of this.phimService.getPhim()) {
      if (phimitem.maPhim === this.maphim) {
        this.phimItem = phimitem;
      }
    }
  }

}
