import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from '../components/input/input.component';
import { SectionComponent } from '../components/section/section.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageComponent } from '../components/image/image.component';
import { LabelComponent } from '../components/label/label.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { NoNegativeAlphaDirective } from '../components/directives/no.negative.directive';

@NgModule({
  declarations: [
   InputComponent,
   SectionComponent,
   ImageComponent,
   LabelComponent,
   CheckboxComponent,
   NoNegativeAlphaDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    InputComponent,
    SectionComponent,
    ImageComponent,
    LabelComponent,
    CheckboxComponent,
    NoNegativeAlphaDirective
  ]
})
export class SharedModule { }
