import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookDetailPageComponent } from './pages/book-detail-page/book-detail-page.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [HomePageComponent, BookDetailPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
