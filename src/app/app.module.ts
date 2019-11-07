import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Header } from './header';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    Header,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [Header]
})
export class AppModule { }
