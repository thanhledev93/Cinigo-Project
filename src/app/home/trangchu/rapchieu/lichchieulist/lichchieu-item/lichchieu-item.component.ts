import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LichChieu} from '../../../../../Shared/lichchieu.model';

@Component({
  selector: 'app-lichchieu-item',
  templateUrl: './lichchieu-item.component.html',
  styleUrls: ['./lichchieu-item.component.css']
})
export class LichchieuItemComponent implements OnInit {
  @Input() lichChieuItem: LichChieu;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLichchieuItem() {
    this.router.navigate(['./checkout', this.lichChieuItem.maPhim]);
  }

}
