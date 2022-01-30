import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LastFmModule } from './last-fm/last-fm.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LastFmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
