import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ActualDataDashBoardComponent } from './actual-data-dash-board/actual-data-dash-board.component';


@NgModule({
  declarations: [
    ActualDataDashBoardComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ,	QuickUiModule,
]
})
export class CoreModule { }
