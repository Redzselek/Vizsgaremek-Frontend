import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSeriesComponent } from './movies-series.component';

describe('MoviesSeriesComponent', () => {
  let component: MoviesSeriesComponent;
  let fixture: ComponentFixture<MoviesSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesSeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
