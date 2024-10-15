import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Batman',
  ];
  public lastHeroDeleted: string | undefined = '';

  deleteLastHero(): void {
    // captar ultimo heroe de la lista
    const deletedHero = this.heroNames.pop();
    this.lastHeroDeleted = deletedHero;
  }
}
