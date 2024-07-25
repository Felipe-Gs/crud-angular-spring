import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cursos-forms',
  templateUrl: './cursos-forms.component.html',
  styleUrl: './cursos-forms.component.scss',
})
export class CursosFormsComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      controlsConfig: {
        nome: [null],
        categoria: [null],
      },
    });
  }
}
