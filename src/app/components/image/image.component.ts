import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: false,
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  public imageName: InputSignal<string> = input.required<string>();
  public imageAltText: InputSignal<string> = input.required<string>();
  public imageCtrlId: InputSignal<string> = input.required<string>();
  public imageExtraClasses: InputSignal<string> = input<string>("");
}
