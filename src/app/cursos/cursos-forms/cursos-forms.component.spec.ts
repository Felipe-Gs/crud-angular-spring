import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosFormsComponent } from './cursos-forms.component';

describe('CursosFormsComponent', () => {
  let component: CursosFormsComponent;
  let fixture: ComponentFixture<CursosFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursosFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
