import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchbarModule } from '../searchbar/SearchbarModule';
import { ToolbarModule } from '../toolbar/toolbar.module'
import {ProfileModule} from '../profile/profile.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    SearchbarModule,
    ToolbarModule,
    ProfileModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule



  ],
  exports: [
    HeaderComponent,

  ]
})
export class HeaderModule { }
