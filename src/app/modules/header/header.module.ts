import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchbarModule } from '../searchbar/SearchbarModule';
import { ToolbarModule } from '../toolbar/toolbar.module'
import {ProfileModule} from '../profile/profile.module'
import { FlexLayoutModule } from '@angular/flex-layout';






@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    SearchbarModule,
    ToolbarModule,
    ProfileModule,
    FlexLayoutModule



  ],
  exports: [
    HeaderComponent,

  ]
})
export class HeaderModule { }
