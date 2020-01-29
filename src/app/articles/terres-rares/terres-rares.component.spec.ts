import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerresRaresComponent } from './terres-rares.component';

describe('TerresRaresComponent', () => {
  let component: TerresRaresComponent;
  let fixture: ComponentFixture<TerresRaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerresRaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerresRaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
