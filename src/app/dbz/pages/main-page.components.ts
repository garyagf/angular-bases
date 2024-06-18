import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPagesComponents {
  constructor(private dbzService: DbzServices) { }

  get characters(): Character[] {
    return [...this.dbzService.character];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

}
