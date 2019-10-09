import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'ConcepTIS';
  hero: Hero = {
    id: 14,
    name: 'Aziza',
  };

  constructor() { }

  ngOnInit(){

  }
}
