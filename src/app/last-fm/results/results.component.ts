import { Component, OnInit, Input } from '@angular/core';
import { LastFmService } from '../services/last-fm.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent implements OnInit {

  @Input('method') method = '';

  constructor( private LastFmService: LastFmService ) { }

  ngOnInit(): void {
  }

  get artistTopResults() {
    return this.LastFmService.artistTopResults;
  }

  get searchMethod() {
    return this.LastFmService.method;
  }


  cardHover(current: any) {
    console.log('hover');
    console.log( current );
  }

}
