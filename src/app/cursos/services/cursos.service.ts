import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICursos } from '../../app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private apiUrlback: string = 'api/cursos';

  constructor(private httpClient: HttpClient) {}

  private ELEMENT_DATA: ICursos[] = [];

  getCursos(): ICursos[] {
    return this.ELEMENT_DATA;
  }

  getRequisicao(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrlback);
  }

  getFelipe(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrlback);
  }
}
