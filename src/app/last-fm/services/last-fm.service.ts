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
  public searchMethod: string = '';

  private lastFmApiUrl: string = 'https://ws.audioscrobbler.com/2.0/';
  private apiKey: string = "e0bacc6f53bd31ce123b67a4878a587d";
  private format: string = "json";
  private auto_correct: number = -1;
  
  constructor(private http: HttpClient) {  }


  get history() {
    return [...this._searchHistory];
  }

  get method() {
    return this.searchMethod;
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
    
    this.searchMethod = method;
    
    this.http.get(this.lastFmApiUrl, { params })
      .subscribe( (resp: any) => {
        //console.log(resp.topalbums.album);
        if ( method === "gettopalbums" ) {
          this.artistTopResults = resp['topalbums']['album'];
        } else {
          this.artistTopResults = resp['toptracks']['track'];
          this.artistTopResults = this.artistTopResults.sort( (a, b) => {
            if ( a['value']['@attr']['rank'] > b['value']['@attr']['rank'] ) {
              return 1;
            }
            if ( a['value']['@attr']['rank'] < b['value']['@attr']['rank'] ) {
              return -1;
            }
            return 0;
          });
        }
        
      });

    
  }
}