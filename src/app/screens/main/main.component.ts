import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  protected uiELement!: TUIElements;

  ngOnInit() {
    this.uiELement = {
      checkboxValue: false,
      imageExtraClases: "",
      imageName: "whiteBulb.png",
      sliderValue: "1.0",
      backgroundColor: "#1c1c2e"
    }
    this.onBackgroundColorChange(this.uiELement.backgroundColor);
    this.onBackgroundBrightnessChange(this.uiELement.sliderValue);
  }

  protected onCheckBoxValueChange = ($event: boolean) => {
    this.uiELement = {
      ...this.uiELement,
      checkboxValue: $event,
      imageName: $event ? "lightOnBulbPng.png" : "whiteBulb.png",
      imageExtraClases: $event ? "zoom" : "",
      sliderValue: "1",
      backgroundColor: $event ? "#fff" : "#1c1c2e"
    }
    this.onBackgroundColorChange(this.uiELement.backgroundColor);
    this.onBackgroundBrightnessChange(this.uiELement.sliderValue);
  }

  protected onBackgroundColorChange = (color: string) => {
    document.body.style.background = color;
  }

  protected onBackgroundBrightnessChange = (value: string) => {
    document.documentElement.style.filter = `brightness(${value})`
  }
}

export declare type TUIElements = {
  checkboxValue: boolean;
  imageName: string;
  imageExtraClases: string;
  sliderValue: string;
  backgroundColor: string;
}
