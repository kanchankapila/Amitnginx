import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiftypharmaComponent } from './niftypharma.component';

describe('NiftypharmaComponent', () => {
  let component: NiftypharmaComponent;
  let fixture: ComponentFixture<NiftypharmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiftypharmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiftypharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
