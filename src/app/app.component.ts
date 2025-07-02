import { Component, inject } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private titleService: Title = inject(Title);
  constructor(){
    this.titleService.setTitle("Bulb On-Off");
  }

}
