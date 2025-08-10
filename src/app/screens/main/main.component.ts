import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  protected uiELement!: TUIElements;
  protected disableButton: boolean = true;
  protected h1TimerValue: number | undefined = undefined;
  protected timer: any;

  ngOnInit() {
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

  protected onCurrentTimeInputChange = ($event: string | undefined = undefined) => {
    if ($event === undefined || $event === null || $event.toString().trim() === '') {
      this.disableButton = true;
    } else {
      this.disableButton = false;
    }
    this.uiELement = {
      ...this.uiELement,
      currentTime: $event
    }
    this.h1TimerValue = Number(this.uiELement.currentTime);
  }

  protected onStartOrStopTimerClick = ($event: Event) => {
    this.uiELement = {
      ...this.uiELement,
      isTimerRunning: !this.uiELement.isTimerRunning
    }

    if (this.uiELement.isTimerRunning && this.h1TimerValue !== undefined) {
      this.h1TimerValue = this.h1TimerValue - 1;
      this.timer = setInterval(() => {
        if (this.h1TimerValue !== undefined && this.h1TimerValue > 0) {
          this.h1TimerValue = this.h1TimerValue - 1;
        } else if (this.h1TimerValue === 0) {
          this.uiELement = {
            ...this.uiELement,
            isTimerRunning: !this.uiELement.isTimerRunning
          }
          this.onCheckBoxValueChange(true);
          this.onCurrentTimeInputChange(undefined);
          clearInterval(this.timer);
        }
      }, 1000)
    } else if (!this.uiELement.isTimerRunning) {
      clearInterval(this.timer);
    }
  }

  protected onResetClick = () => {
    this.onCurrentTimeInputChange(undefined);
  }
}

export declare type TUIElements = {
  checkboxValue: boolean;
  imageName: string;
  imageExtraClases: string;
  sliderValue: string;
  backgroundColor: string;
  currentTime?: string;
  isTimerRunning?: boolean;
}
