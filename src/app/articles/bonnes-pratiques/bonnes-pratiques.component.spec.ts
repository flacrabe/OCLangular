import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonnesPratiquesComponent } from './bonnes-pratiques.component';

describe('BonnesPratiquesComponent', () => {
  let component: BonnesPratiquesComponent;
  let fixture: ComponentFixture<BonnesPratiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonnesPratiquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonnesPratiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
