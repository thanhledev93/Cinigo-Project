import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  @Input() gheItem;
  @Output() emitStatus = new EventEmitter<boolean>();
  status = false;
  constructor() { }

  ngOnInit() {
  }
  datGhe() {
    if (this.status) {this.status = false} else {this.status = true}
    this.emitStatus.emit(this.status);
  }

}
