import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutmoeComponent } from './ajoutmoe.component';

describe('AjoutmoeComponent', () => {
  let component: AjoutmoeComponent;
  let fixture: ComponentFixture<AjoutmoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutmoeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutmoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
