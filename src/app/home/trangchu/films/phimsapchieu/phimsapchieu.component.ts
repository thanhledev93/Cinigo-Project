import { Component, OnInit } from '@angular/core';
import {Phim} from '../phim.model';
import {PhimService} from '../phim.service';

@Component({
  selector: 'app-phimsapchieu',
  templateUrl: './phimsapchieu.component.html',
  styleUrls: ['./phimsapchieu.component.css']
})
export class PhimsapchieuComponent implements OnInit {
  phimsapchieu: Phim[] = [];
  constructor(private phimService: PhimService) { }

  ngOnInit() {
    for (const phim of this.phimService.getPhim()) {
      if (!phim.loaiPhim) {
        this.phimsapchieu.push(phim);
      }
    }
  }

}
