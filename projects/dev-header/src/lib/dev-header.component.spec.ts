import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevHeaderComponent } from './dev-header.component';

describe('DevHeaderComponent', () => {
  let component: DevHeaderComponent;
  let fixture: ComponentFixture<DevHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
