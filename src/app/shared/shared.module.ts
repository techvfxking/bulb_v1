import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from '../components/input/input.component';
import { SectionComponent } from '../components/section/section.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageComponent } from '../components/image/image.component';

@NgModule({
  declarations: [
   InputComponent,
   SectionComponent,
   ImageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    InputComponent,
    SectionComponent,
    ImageComponent
  ]
})
export class SharedModule { }
