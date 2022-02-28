import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamJalonComponent } from './param-jalon.component';

describe('ParamJalonComponent', () => {
  let component: ParamJalonComponent;
  let fixture: ComponentFixture<ParamJalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamJalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamJalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
