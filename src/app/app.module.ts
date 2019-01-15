import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrangchuComponent } from './home/trangchu/trangchu.component';
import { HeaderComponent } from './home/trangchu/header/header.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { SearchformComponent } from './home/trangchu/header/searchform/searchform.component';
import { SigninformComponent } from './home/auth/signinform/signinform.component';
import { SliderComponent } from './home/trangchu/header/slider/slider.component';
import { FilmsComponent } from './home/trangchu/films/films.component';
import { RapchieuComponent } from './home/trangchu/rapchieu/rapchieu.component';
import { CumrapComponent } from './home/trangchu/rapchieu/cumrap/cumrap.component';
import { RapchieulistComponent } from './home/trangchu/rapchieu/rapchieulist/rapchieulist.component';
import { CumrapitemComponent } from './home/trangchu/rapchieu/cumrap/cumrapitem/cumrapitem.component';
import { RapchieuItemComponent } from './home/trangchu/rapchieu/rapchieulist/rapchieu-item/rapchieu-item.component';
import { LichchieulistComponent } from './home/trangchu/rapchieu/lichchieulist/lichchieulist.component';
import { LichchieuItemComponent } from './home/trangchu/rapchieu/lichchieulist/lichchieu-item/lichchieu-item.component';
import { TintucphimComponent } from './home/trangchu/tintucphim/tintucphim.component';
import { DienanhComponent } from './home/trangchu/tintucphim/dienanh/dienanh.component';
import { ReviewComponent } from './home/trangchu/tintucphim/review/review.component';
import { KhuyenmaiComponent } from './home/trangchu/tintucphim/khuyenmai/khuyenmai.component';
import { UngdungComponent } from './home/trangchu/ungdung/ungdung.component';
import { FooterComponent } from './home/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {FilmitemComponent} from './home/trangchu/films/filmitem/filmitem.component';
import {RapchieuService} from './home/trangchu/rapchieu/rapchieu.service';
import {AppRoutingModule} from './app-routing.module';
import {PhimService} from './home/trangchu/films/phim.service';
import { HomeComponent } from './home/home.component';
import { PhimdangchieuComponent } from './home/trangchu/films/phimdangchieu/phimdangchieu.component';
import { PhimsapchieuComponent } from './home/trangchu/films/phimsapchieu/phimsapchieu.component';
import { TrangchitietPhimComponent } from './home/trangchitiet-phim/trangchitiet-phim.component';
import { PhimInfoComponent } from './home/trangchitiet-phim/phim-info/phim-info.component';
import { ThongtinPhimComponent } from './home/trangchitiet-phim/thongtin-phim/thongtin-phim.component';
import { DanggiaPhimComponent } from './home/trangchitiet-phim/danggia-phim/danggia-phim.component';
import { TrangdatveComponent } from './home/trangdatve/trangdatve.component';
import { DanhsachgheComponent } from './home/trangdatve/danhsachghe/danhsachghe.component';
import { GheComponent } from './home/trangdatve/ghe/ghe.component';
import {DatgheService} from './home/trangdatve/datghe.service';
import { ThongtinDatveComponent } from './home/trangdatve/thongtin-datve/thongtin-datve.component';
import { SignupComponent } from './home/auth/signup/signup.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './home/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    HeaderComponent,
    NavigationComponent,
    SearchformComponent,
    SigninformComponent,
    SliderComponent,
    FilmsComponent,
    FilmitemComponent,
    RapchieuComponent,
    CumrapComponent,
    RapchieulistComponent,
    CumrapitemComponent,
    RapchieuItemComponent,
    LichchieulistComponent,
    LichchieuItemComponent,
    TintucphimComponent,
    DienanhComponent,
    ReviewComponent,
    KhuyenmaiComponent,
    UngdungComponent,
    FooterComponent,
    HomeComponent,
    PhimdangchieuComponent,
    PhimsapchieuComponent,
    TrangchitietPhimComponent,
    PhimInfoComponent,
    ThongtinPhimComponent,
    DanggiaPhimComponent,
    TrangdatveComponent,
    DanhsachgheComponent,
    GheComponent,
    ThongtinDatveComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RapchieuService, PhimService, DatgheService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
