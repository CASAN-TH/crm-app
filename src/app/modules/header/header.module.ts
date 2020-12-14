import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule
<<<<<<< HEAD

  ],
  exports :[
    HeaderComponent,
=======
>>>>>>> 448ee9d1b1dd8253dd69ceb4691e62031d085a12
  ]
})
export class HeaderModule { }
