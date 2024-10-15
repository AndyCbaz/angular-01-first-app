import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class DbzMainPageComponent {
  constructor(private dbzService: DbzService) {}
  get personajesList(): Personaje[] {
    return [...this.dbzService.personajesList];
  }
  onDeletePersonaje(id: string): void {
    this.dbzService.deletePersonaje(id);
  }

  onNewPersonaje(personaje: Personaje): void {
    this.dbzService.addNewPersonaje(personaje);
  }
  onOrderDelete(): void {
    this.dbzService.orderDelete();
  }
}
