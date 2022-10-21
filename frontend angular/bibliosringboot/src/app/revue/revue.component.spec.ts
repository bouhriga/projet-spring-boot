import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevueComponent } from './revue.component';

describe('RevueComponent', () => {
  let component: RevueComponent;
  let fixture: ComponentFixture<RevueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
