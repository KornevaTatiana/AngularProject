import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: '', redirectTo: '/toolbar', pathMatch: 'full' },
  { path: 'detail/:id', component: BookDetailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
