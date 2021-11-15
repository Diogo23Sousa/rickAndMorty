
import { Component } from '@angular/core';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'rick-morty'; 
  public characters : any[] = [];
  public charactersSearched : any[] = [];

   // SEARCH BOX TEXT
  searchInput: string = "";

  constructor(private characterService : CharacterService) {}

  ngOnInit() {
    this.getAllCharacters();
    this.charactersSearched =  this.characters;
  } 

  
  getAllCharacters() {
    this.characterService.getAllCharacters().subscribe(response => {
      this.characters = response.results
      console.log("Total Characters:", response.results)
    },
    (error) => {console.log(error.error.message)})
  }

  getCharactersByName() {
    this.charactersSearched = [];
    this.characters.forEach(x => {
      if((x.name.toUpperCase()).includes(this.searchInput.toUpperCase())) {
        this.charactersSearched.push(x);
      }
    });
    console.log("filtered Characters:", this.charactersSearched)
  }

}



