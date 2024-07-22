import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICursos } from '../../app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private apiUrl: string = 'https://dog.ceo/api/breeds/image/random';
  private apiGithubUrl: string = 'https://api.github.com/users/Felipe-Gs';

  constructor(private httpClient: HttpClient) {}

  getMensagem(): string {
    return 'Olá, esta é uma mensagem do CursosService!';
  }
  private ELEMENT_DATA: ICursos[] = [
    {
      _id: '1',
      name: 'Curso de Angular',
      category: 'Desenvolvimento Web',
      position: 1,
      duration: '40 horas',
    },
    {
      _id: '2',
      name: 'Curso de React',
      category: 'Desenvolvimento Web',
      position: 2,
      duration: '35 horas',
    },
    {
      _id: '3',
      name: 'Curso de Node.js',
      category: 'Desenvolvimento Backend',
      position: 3,
      duration: '50 horas',
    },
    {
      _id: '4',
      name: 'Curso de PostgreSQL',
      category: 'Banco de Dados',
      position: 4,
      duration: '30 horas',
    },
    {
      _id: '5',
      name: 'Curso de Python',
      category: 'Programação',
      position: 5,
      duration: '45 horas',
    },
  ];

  getCursos(): ICursos[] {
    return this.ELEMENT_DATA;
  }

  getRequisicao(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }

  getDataGithub(): Observable<any> {
    return this.httpClient.get<any>(this.apiGithubUrl);
  }
}
