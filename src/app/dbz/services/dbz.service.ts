import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public personajesList: Personaje[] = [
    {
      id: uuid(),
      nombre: 'Goku',
      poder: 15000,
    },
    {
      id: uuid(),
      nombre: 'Vegeta',
      poder: 7500,
    },
    {
      id: uuid(),
      nombre: 'Krilin',
      poder: 1000,
    },
  ];

  addNewPersonaje(personaje: Personaje) {
    const newPersonaje: Personaje = {
      id: uuid(),
      ...personaje,
    };
    this.personajesList.push(newPersonaje);
  }

  deletePersonaje(id: string) {
    // borrar personaje por el id
    this.personajesList = this.personajesList.filter(
      (personaje) => personaje.id !== id
    );
  }

  orderDelete() {
    this.personajesList.pop();
  }
}
