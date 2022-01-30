import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface History {
  artist: string;
  method: string;
}

@Injectable({
  providedIn: 'root'
})
export class LastFmService {

  private _searchHistory: History[] = [];
  public artistTopResults: any[] = [];

  private lastFmApiUrl: string = 'https://ws.audioscrobbler.com/2.0/';
  private apiKey: string = "e0bacc6f53bd31ce123b67a4878a587d";
  private format: string = "json";
  private auto_correct: number = -1;
  
  constructor(private http: HttpClient) {  }


  get history() {
    return [...this._searchHistory];
  }

  public getArtistTop(artist: string, method: string) {
    console.log(artist, method);

    artist = artist.trim().toLocaleLowerCase();

    const searchExists = this._searchHistory.findIndex((history: History) => {
      return history['artist'] === artist && history['method'] === method;

    });

    if ( searchExists === -1 ) {
      const searchObject: History = {
        "artist": artist,
        "method": method 
      };
      this._searchHistory.unshift(searchObject);
      this._searchHistory = this._searchHistory.splice(0, 15);
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('format',this.format)
      .set('artist', artist)
      .set('method', "artist." + method)
      .set('autocorrect', this.auto_correct)
    ;


    // this.http.get('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=mago%20de%20oz&api_key=e0bacc6f53bd31ce123b67a4878a587d&format=json')
    //   .subscribe( resp => {
    //     console.log(resp);
    //   });

    
    
    this.http.get(this.lastFmApiUrl, { params })
      .subscribe( (resp: any) => {
        console.log(resp.topalbums.album);
        this.artistTopResults = resp['topalbums']['album'];
      });

    
  }
}