import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { CreatewhatifComponent } from './createwhatif/createwhatif.component';
import { ShareComponent } from './share/share.component';


@NgModule({
  declarations: [
    CreatewhatifComponent,
    ShareComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ,	QuickUiModule,
]
})
export class ShareModule { }
