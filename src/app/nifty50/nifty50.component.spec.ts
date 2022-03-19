import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nifty50Component } from './nifty50.component';

describe('Nifty50Component', () => {
  let component: Nifty50Component;
  let fixture: ComponentFixture<Nifty50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nifty50Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nifty50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
