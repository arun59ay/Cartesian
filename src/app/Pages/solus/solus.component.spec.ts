import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolusComponent } from './solus.component';

describe('SolusComponent', () => {
  let component: SolusComponent;
  let fixture: ComponentFixture<SolusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
