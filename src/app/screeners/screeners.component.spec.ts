import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScreenersComponent } from './screeners.component';

describe('ScreenersComponent', () => {
  let component: ScreenersComponent;
  let fixture: ComponentFixture<ScreenersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
