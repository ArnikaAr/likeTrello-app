import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardsComponent} from './boards/boards.component';
import {AddBoardComponent} from './add-board/add-board.component'


const routes: Routes = [
  {path: 'boards', component: BoardsComponent},
  {path: 'add', component: AddBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
