import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ICursos } from '../../app.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'category', 'duration'];
  ELEMENT_DATA: ICursos[] = [];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  isLoading: boolean = false;

  constructor(
    private cursosService: CursosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.getfelipe();
  }

  getfelipe() {
    this.cursosService.getFelipe().subscribe(
      (data) => {
        console.log(data);
        this.dataSource = data;
      },
      (err) => {
        console.log('deu erro' + err);
      }
    );
  }

  addNew() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }
}
