import { Component, input, InputSignal, signal, model, ModelSignal, effect, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: false,
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  public inputId: InputSignal<string> = input.required<string>();
  public inputValue: ModelSignal<boolean> = model.required<boolean>();

  protected onToggleClick = ($event: MouseEvent) => {
    $event.preventDefault();
    const inputELement = $event.currentTarget as HTMLInputElement;
    this.inputValue.set(inputELement.checked);
  }
}
