import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { ResultsComponent } from './results/results.component';
import { SearchHandlerComponent } from './search-handler/search-handler.component';



@NgModule({
  declarations: [
    ArtistPageComponent,
    ResultsComponent,
    SearchHandlerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArtistPageComponent,
    SearchHandlerComponent
  ]
})
export class LastFmModule { }
