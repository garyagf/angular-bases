import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Sipderman', 'Ironman', 'Hulk', 'she hulk', 'thor']
  public deletedHero?: string;


  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
    // console.log(deletHeto);
  }

}
