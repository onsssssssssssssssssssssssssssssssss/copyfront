import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumebComponent } from './numeb.component';

describe('NumebComponent', () => {
  let component: NumebComponent;
  let fixture: ComponentFixture<NumebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
