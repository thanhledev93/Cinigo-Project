import {Component, Input, OnInit} from '@angular/core';
import {RapchieuService} from '../../rapchieu.service';

@Component({
  selector: 'app-rapchieu-item',
  templateUrl: './rapchieu-item.component.html',
  styleUrls: ['./rapchieu-item.component.css']
})
export class RapchieuItemComponent implements OnInit {
  @Input() rapchieuItem;
  constructor(private rapchieuService: RapchieuService) { }

  ngOnInit() {
  }
  onSelectedRapChieu() {
    this.rapchieuService.rapchieuSelected.emit(this.rapchieuItem);
  }

}
