import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  exports:[SidebarComponent]
})
export class SidebarModule { }
