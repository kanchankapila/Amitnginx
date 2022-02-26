import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OHLCComponent } from './ohlc.component';

describe('OHLCComponent', () => {
  let component: OHLCComponent;
  let fixture: ComponentFixture<OHLCComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OHLCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OHLCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
