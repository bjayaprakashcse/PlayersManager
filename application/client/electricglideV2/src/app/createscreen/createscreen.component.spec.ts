import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatescreenComponent } from './createscreen.component';

describe('CreatescreenComponent', () => {
  let component: CreatescreenComponent;
  let fixture: ComponentFixture<CreatescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatescreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
