import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DbzMainPageComponent } from './pages/main-page.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoPersonajesComponent } from './components/listado/listado-personajes.component';

@NgModule({
  exports: [DbzMainPageComponent],
  declarations: [
    DbzMainPageComponent,
    ListadoPersonajesComponent,
    FormularioComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
