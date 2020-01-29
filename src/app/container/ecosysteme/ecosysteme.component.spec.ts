import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemeComponent } from './ecosysteme.component';

describe('EcosystemeComponent', () => {
  let component: EcosystemeComponent;
  let fixture: ComponentFixture<EcosystemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcosystemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcosystemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
