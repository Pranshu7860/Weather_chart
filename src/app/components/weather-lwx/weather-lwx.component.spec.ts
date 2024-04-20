import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLwxComponent } from './weather-lwx.component';

describe('WeatherLwxComponent', () => {
  let component: WeatherLwxComponent;
  let fixture: ComponentFixture<WeatherLwxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherLwxComponent]
    });
    fixture = TestBed.createComponent(WeatherLwxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
