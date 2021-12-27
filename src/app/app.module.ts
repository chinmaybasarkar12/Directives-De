import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { myDirective } from './Basic-Directive/my-directive';
import { BetterDirective } from './Basic-Directive/better-Directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, myDirective, BetterDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
