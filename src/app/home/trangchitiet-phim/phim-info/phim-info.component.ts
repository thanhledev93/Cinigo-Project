import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Phim} from '../../trangchu/films/phim.model';
import {PhimService} from '../../trangchu/films/phim.service';

@Component({
  selector: 'app-phim-info',
  templateUrl: './phim-info.component.html',
  styleUrls: ['./phim-info.component.css']
})
export class PhimInfoComponent implements OnInit {
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
