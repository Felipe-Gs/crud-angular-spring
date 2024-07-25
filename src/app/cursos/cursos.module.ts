import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CursosFormsComponent } from './cursos-forms/cursos-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CursosComponent, CursosFormsComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
})
export class CursosModule {}
