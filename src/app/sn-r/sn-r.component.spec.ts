import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SnRComponent } from './sn-r.component';

describe('SnRComponent', () => {
  let component: SnRComponent;
  let fixture: ComponentFixture<SnRComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SnRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
