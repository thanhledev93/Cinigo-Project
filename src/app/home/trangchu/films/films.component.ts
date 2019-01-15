import { Component, OnInit } from '@angular/core';
import {Phim} from './phim.model';
import {PhimService} from './phim.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  phims: Phim[] = [];
  constructor(private phimService: PhimService) { }

  ngOnInit() {
  this.phims = this.phimService.getPhim();
  }

}
