import { Component, effect, input, InputSignal, model, ModelSignal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  public inputType: InputSignal<InputType> = input.required<InputType>();
  public inputId: InputSignal<string> = input.required<string>();
  public inputMin: InputSignal<string> = input<string>("");
  public inputMax: InputSignal<string> = input<string>("");
  public inputStep: InputSignal<string> = input<string>("");
  public inputValue: ModelSignal<string> = model.required<string>();

  protected onValueChange = ($event: Event) => {
    const inputValue = $event.target as HTMLInputElement
    this.inputValue.set(inputValue.value);
  }
}

export type InputType =
  | 'button'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';
