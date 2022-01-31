import { Component } from '@angular/core';
import { LastFmService } from './last-fm/services/last-fm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'last-fm-surfer';

  constructor(private lastFmService: LastFmService) {}

  get history() {
    return this.lastFmService.history;
  }
  
  searchHistoryItem( artist: string, method: string ) {
    this.lastFmService.getArtistTop(artist, method);
  }

}
