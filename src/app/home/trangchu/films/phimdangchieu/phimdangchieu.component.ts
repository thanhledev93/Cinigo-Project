import { Component, OnInit } from '@angular/core';
import {PhimService} from '../phim.service';
import {Phim} from '../phim.model';

@Component({
  selector: 'app-phimdangchieu',
  templateUrl: './phimdangchieu.component.html',
  styleUrls: ['./phimdangchieu.component.css']
})
export class PhimdangchieuComponent implements OnInit {
  phimdangchieu: Phim[] = [];
  constructor(private phimService: PhimService) { }

  ngOnInit() {
    for (const phim of this.phimService.getPhim()) {
      if (phim.loaiPhim) {
        this.phimdangchieu.push(phim);
      }
    }
  }

}
