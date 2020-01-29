import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebondComponent } from './rebond.component';

describe('RebondComponent', () => {
  let component: RebondComponent;
  let fixture: ComponentFixture<RebondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
