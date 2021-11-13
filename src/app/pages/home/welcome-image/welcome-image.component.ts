import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-image',
  templateUrl: './welcome-image.component.html',
  styleUrls: ['./welcome-image.component.scss']
})
export class WelcomeImageComponent implements OnInit {
  fullDate: Date;

  get image() {
    return "linear-gradient(0deg, rgb(158 174 52 / 40%) 50%, rgb(193 214 59 / 20%) 100%), url(../../../../assets/local-images/chisinau.jpg)";
  }
  get date() {
    return this.fullDate.toLocaleString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }
  location = 'Chisinau';
  constructor() { this.fullDate = new Date() }

  ngOnInit(): void { }
}
