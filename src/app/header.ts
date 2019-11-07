import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})

export class Header {
  title = 'TISC';
}

export class Hero {
  id: number;
  name: string;
}
