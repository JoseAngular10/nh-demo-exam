import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookDetailPageComponent } from './pages/book-detail-page/book-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent

  },
  {
    path: 'book/:id',
    component: BookDetailPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
