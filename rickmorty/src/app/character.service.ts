import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = "https://rickandmortyapi.com/api/";

  constructor(
    private http : HttpClient
  ) { }

  getAllCharacters () {
    return this.http.get<any>(this.url + `character` , {})
  }

  getCharByName(name: string = "") {
    return this.http.get<any>(this.url + `character?name=${name}` , {})
  }
}
