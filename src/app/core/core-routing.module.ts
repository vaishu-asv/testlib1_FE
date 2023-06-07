import { ActualDataDashBoardComponent } from './actual-data-dash-board/actual-data-dash-board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'actual-data-dash-board', component: ActualDataDashBoardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
