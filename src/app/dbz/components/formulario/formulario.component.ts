import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  @Output()
  public onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  @Output()
  public onOrderDelete: EventEmitter<void> = new EventEmitter();

  public nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0,
  };

  // Metodos
  emitPersonaje() {
    if (this.nuevoPersonaje.nombre.length === 0) return;
    this.onNuevoPersonaje.emit({ ...this.nuevoPersonaje });

    this.nuevoPersonaje.nombre = '';
    this.nuevoPersonaje.poder = 0;
  }

  orderDelete() {
    this.onOrderDelete.emit();
  }
}
