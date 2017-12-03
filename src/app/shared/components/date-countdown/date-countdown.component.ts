import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-date-countdown',
  templateUrl: 'date-countdown.component.html',
  styleUrls: ['date-countdown.component.scss']
})

export class DateCountdownComponent implements AfterViewInit {
  @Input() endDate: Date;

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  timerId: NodeJS.Timer;

  constructor() { }

  ngAfterViewInit() {
    if (this.endDate) {
      this.timerId = setInterval(() => {
        this.timeRemaining();
      }, 1000);
    }
  }

  timeRemaining() {
    const dateEntered = new Date(this.endDate);
    const now = new Date();
    const difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {
      // Timer done
      clearInterval(this.timerId);
    } else {
      this.seconds = Math.floor(difference / 1000);
      this.minutes = Math.floor(this.seconds / 60);
      this.hours = Math.floor(this.minutes / 60);
      this.days = Math.floor(this.hours / 24);

      this.hours %= 24;
      this.minutes %= 60;
      this.seconds %= 60;
    }
  }
}
