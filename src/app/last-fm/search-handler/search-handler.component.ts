import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LastFmService } from '../services/last-fm.service';

@Component({
  selector: 'app-search-handler',
  templateUrl: './search-handler.component.html',
  styles: [
  ]
})
export class SearchHandlerComponent implements OnInit {

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  @ViewChild('methodSelect') methodSelect!: ElementRef<HTMLInputElement>;

  constructor( private lastFmService: LastFmService) { }

  ngOnInit(): void {
  }

  search() {
    console.log(this.searchInput);
    const artist = this.searchInput.nativeElement.value;
    const method = this.methodSelect.nativeElement.value;
    //console.log(artist, method);

    if ( artist !== "" && artist != undefined ) {
      this.searchInput.nativeElement.value = "";
      console.log('artist is not empty');
      this.lastFmService.getArtistTop( artist, method );
    }
  }

}
