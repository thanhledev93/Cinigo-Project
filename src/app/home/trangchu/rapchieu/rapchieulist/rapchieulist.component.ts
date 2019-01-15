import { Component, OnInit } from '@angular/core';
import {RapchieuService} from '../rapchieu.service';
import {CumRap} from '../../../../Shared/cumrap.model';

@Component({
  selector: 'app-rapchieulist',
  templateUrl: './rapchieulist.component.html',
  styleUrls: ['./rapchieulist.component.css']
})
export class RapchieulistComponent implements OnInit {
  rapchieus = [];
  cumrapSelected: CumRap;
  constructor(private rapchieuService: RapchieuService) { }

  ngOnInit() {
    for (const rapchieudef of this.rapchieuService.getRapChieu()) {
      if (rapchieudef.maCumRap === 0) {
        this.rapchieus.push(rapchieudef);
      }
    }

    this.rapchieuService.cumRapSelected.subscribe(
      (cumrap: CumRap) => {
        this.cumrapSelected = cumrap;
        this.rapchieus = [];
        for (const rapchieu of this.rapchieuService.getRapChieu()) {
          if (rapchieu.maCumRap === this.cumrapSelected.maCumRap) {
            this.rapchieus.push(rapchieu);
          }
        }
      }
    );
  }

}
