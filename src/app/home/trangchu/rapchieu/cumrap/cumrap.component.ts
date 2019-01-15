import { Component, OnInit } from '@angular/core';
import {CumRap} from '../../../../Shared/cumrap.model';
import {RapchieuService} from '../rapchieu.service';

@Component({
  selector: 'app-cumrap',
  templateUrl: './cumrap.component.html',
  styleUrls: ['./cumrap.component.css']
})
export class CumrapComponent implements OnInit {
  cumraps: CumRap[];
  constructor(private rapchieuServie: RapchieuService) { }

  ngOnInit() {
    this.cumraps = this.rapchieuServie.getCumCap();
  }

}
