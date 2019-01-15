import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrangchuComponent} from './home/trangchu/trangchu.component';
import {PhimdangchieuComponent} from './home/trangchu/films/phimdangchieu/phimdangchieu.component';
import {PhimsapchieuComponent} from './home/trangchu/films/phimsapchieu/phimsapchieu.component';
import {TrangchitietPhimComponent} from './home/trangchitiet-phim/trangchitiet-phim.component';
import {TrangdatveComponent} from './home/trangdatve/trangdatve.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/cinigo', pathMatch: 'full' },
  { path: 'cinigo', component: TrangchuComponent, children: [
          { path: '', component: PhimdangchieuComponent },
          { path: 'phimsapchieu', component: PhimsapchieuComponent },
  ]},
  { path: 'phim/:id', component: TrangchitietPhimComponent, },
  { path: 'checkout/:id', component: TrangdatveComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
