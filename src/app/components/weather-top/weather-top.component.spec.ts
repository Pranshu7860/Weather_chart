import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTopComponent } from './weather-top.component';

describe('WeatherTopComponent', () => {
  let component: WeatherTopComponent;
  let fixture: ComponentFixture<WeatherTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherTopComponent]
    });
    fixture = TestBed.createComponent(WeatherTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
