import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-listado-personajes',
  templateUrl: './listado-personajes.component.html',
})
export class ListadoPersonajesComponent {
  public nameListado: string = 'Listado';
  @Input()
  public personajes: Personaje[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeletePersonaje(id:string | undefined) {
    this.onDelete.emit(id);
  }
}
