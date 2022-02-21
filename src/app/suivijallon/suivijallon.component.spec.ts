import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivijallonComponent } from './suivijallon.component';

describe('SuivijallonComponent', () => {
  let component: SuivijallonComponent;
  let fixture: ComponentFixture<SuivijallonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivijallonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivijallonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
