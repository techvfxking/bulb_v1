import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  protected uiELement!: TUIElements;
  protected currentTime!: string;

  private interval!: any;

  ngOnInit() {
    this.currentTime = "100";
    this.uiELement = {
      checkboxValue: false,
      imageExtraClases: "",
      imageName: "whiteBulb.png",
      sliderValue: "1.0",
      backgroundColor: "#1c1c2e"
    }
    this.onBackgroundColorChange();
    this.onBackgroundBrightnessChange();
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
    this.onBackgroundColorChange();
    this.onBackgroundBrightnessChange();
  }

  protected onBackgroundColorChange = () => {
    document.body.style.background = this.uiELement.backgroundColor;
  }

  protected onBackgroundBrightnessChange = ($event: string | undefined = undefined) => {
    document.documentElement.style.filter = `brightness(${$event || this.uiELement.sliderValue})`
  }

  protected onStart = () => {
    this.interval = setInterval(() => {
      this.currentTime = String(Number(this.currentTime) - 1);
    },1000);
  }

  protected onStop = () => {
    clearInterval(this.interval);
  }
}

export declare type TUIElements = {
  checkboxValue: boolean;
  imageName: string;
  imageExtraClases: string;
  sliderValue: string;
  backgroundColor: string;
}
