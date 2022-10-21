import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpruntComponent } from './emprunt.component';

describe('EmpruntComponent', () => {
  let component: EmpruntComponent;
  let fixture: ComponentFixture<EmpruntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpruntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpruntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
