import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: false,
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
  public className: InputSignal<string> = input.required<string>();
  public lableFor: InputSignal<string> = input.required<string>();
}
