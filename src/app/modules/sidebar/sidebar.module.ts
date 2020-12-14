import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports:[SidebarComponent]
})
export class SidebarModule { }
