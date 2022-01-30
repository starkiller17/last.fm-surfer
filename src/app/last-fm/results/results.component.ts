import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../services/last-fm.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent implements OnInit {

  constructor( private LastFmService: LastFmService ) { }

  ngOnInit(): void {
  }

  get artistTopResults() {
    return this.LastFmService.artistTopResults;
  }

}
