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

  private lastFmApiUrl: string = 'https://ws.audioscrobbler.com/2.0';
  private apiKey: string = "e0bacc6f53bd31ce123b67a4878a587d";
  private format: string = "json";
  
  constructor() {  }


  get history() {
    return [...this._searchHistory];
  }

  public getArtistTop(artist: string, method: string) {
    console.log(artist, method);



    const searchObject: History = {
      "artist": artist,
       "method": method 
    };
    this._searchHistory.unshift(searchObject);
  }
}