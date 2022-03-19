import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiftybankComponent } from './niftybank.component';

describe('NiftybankComponent', () => {
  let component: NiftybankComponent;
  let fixture: ComponentFixture<NiftybankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiftybankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiftybankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
