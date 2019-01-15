import {Component, Input, OnInit} from '@angular/core';
import {Phim} from '../phim.model';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Route, Router, Routes} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-filmitem',
  templateUrl: './filmitem.component.html',
  styleUrls: ['./filmitem.component.css']
})
export class FilmitemComponent implements OnInit {
  @Input() phimitem: Phim;
  url: SafeResourceUrl;
  constructor(public  sanitizer: DomSanitizer, private route: Router) {

  }

  ngOnInit() {
    console.log(this.phimitem.trailerLink);
  this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.phimitem.trailerLink);

  }
  onMuave() {
    this.route.navigate(['./phim', this.phimitem.maPhim]);
  }

}
