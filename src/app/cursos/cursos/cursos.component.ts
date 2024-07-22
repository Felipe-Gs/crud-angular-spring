import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ICursos } from '../../app.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'category', 'duration'];
  ELEMENT_DATA: ICursos[] = [];
  dataSource = new MatTableDataSource<ICursos>(this.ELEMENT_DATA);
  mensagem: string = '';
  dogImage: string = '';
  githubImage: string = '';
  isLoading: boolean = false;

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.mensagem = this.cursosService.getMensagem();
    this.getCursos();
    this.loadRandomDogImage();
    this.getDataGithub();
  }

  getCursos() {
    this.ELEMENT_DATA = this.cursosService.getCursos();
    this.dataSource.data = this.ELEMENT_DATA;
  }

  loadRandomDogImage() {
    this.isLoading = true;
    this.cursosService.getRequisicao().subscribe(
      (data) => {
        this.dogImage = data.message;
        console.log(data);
        console.log(data.status);
        console.log('Tudo certo com a api');
        this.isLoading = false;
      },
      (error) => {
        console.log(error.message);
        console.log(error.status);
        this.isLoading = false;
      }
    );
  }

  getDataGithub() {
    this.cursosService.getDataGithub().subscribe(
      (data) => {
        console.log(data);
        this.githubImage = data.avatar_url;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
