import {Component, Input, OnInit} from '@angular/core';
import {RapchieuService} from '../../rapchieu.service';

@Component({
  selector: 'app-cumrapitem',
  templateUrl: './cumrapitem.component.html',
  styleUrls: ['./cumrapitem.component.css']
})
export class CumrapitemComponent implements OnInit {
  @Input() cumrapitem;
  constructor(private rapchieuService: RapchieuService) { }

  ngOnInit() {
  }
  onSelectedCumRap() {
    this.rapchieuService.cumRapSelected.emit(this.cumrapitem);
  }

}
