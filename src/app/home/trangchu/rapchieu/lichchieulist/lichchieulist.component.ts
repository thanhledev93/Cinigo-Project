import { Component, OnInit } from '@angular/core';
import {RapchieuService} from '../rapchieu.service';
import {Rapchieu} from '../../../../Shared/rapchieu.model';
import {CumRap} from '../../../../Shared/cumrap.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-lichchieulist',
  templateUrl: './lichchieulist.component.html',
  styleUrls: ['./lichchieulist.component.css']
})
export class LichchieulistComponent implements OnInit {
  lichChieus = [];
  rapchieuSelected: Rapchieu;
  cumrapSelected: CumRap;
  maphim: number;
  flag = true;


  constructor(private rapchieuService: RapchieuService, private route: ActivatedRoute) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.maphim = +params['id'];

        if (this.maphim >= 0) {
          this.flag = false;
        }

        if (this.flag) {
          console.log(this.flag);

          for (const lichchieudef of this.rapchieuService.getLichChieu()) {
            if (lichchieudef.maRapChieu === 0) {
              this.lichChieus.push(lichchieudef);
            }
          }

          this.rapchieuService.rapchieuSelected.subscribe(
            (rapchieu: Rapchieu) => {
              this.lichChieus = [];

              this.rapchieuSelected = rapchieu;
              for (const lichchieu of this.rapchieuService.getLichChieu()) {
                if (lichchieu.maRapChieu === this.rapchieuSelected.maRapChieu) {
                  this.lichChieus.push(lichchieu);
                }
              }
            }
          );

          this.rapchieuService.cumRapSelected.subscribe(
            (cumrap: CumRap) => {
              this.lichChieus = [];
            }
          );
        } else {
          console.log(this.flag + 'asdasd');

          for (const lichchieudef of this.rapchieuService.getLichChieu()) {
            if (lichchieudef.macumrap === 0 && lichchieudef.maPhim === this.maphim) {
              this.lichChieus.push(lichchieudef);
            }
          }

          this.rapchieuService.cumRapSelected.subscribe(
            (cumrap: CumRap) => {
              this.lichChieus = [];
              this.cumrapSelected = cumrap;

              for (const lichchieu of this.rapchieuService.getLichChieu()) {
                console.log(this.maphim + 'maphim');
                console.log(lichchieu.macumrap + 'macumrapLC');
                console.log(this.cumrapSelected.maCumRap + 'cumrapSL');
                console.log(lichchieu.maPhim + 'maphimLC ////');

                if (lichchieu.macumrap === this.cumrapSelected.maCumRap && lichchieu.maPhim === this.maphim) {
                  this.lichChieus.push(lichchieu);
                }
              }
            }
          );
        }
      }
    );
  }

}
