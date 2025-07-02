import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: false,
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  public className: InputSignal<string> = input.required<string>();
}
