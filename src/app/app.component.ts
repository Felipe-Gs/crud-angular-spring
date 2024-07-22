import { Component } from '@angular/core';

export interface ICursos {
  _id: string;
  name: string;
  category: string;
  position: number;
  duration: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  mensagem: String = '';
}
