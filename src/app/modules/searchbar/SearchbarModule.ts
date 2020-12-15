import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatInputModule}from '@angular/material/input'





@NgModule({
  declarations: [SearchbarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
    
  
 
  ],
  exports: [
    SearchbarComponent
  ],
})
export class SearchbarModule {
}
