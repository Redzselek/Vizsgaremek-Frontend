import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSeriesAboutComponent } from './movies-series-about.component';

describe('MoviesSeriesAboutComponent', () => {
  let component: MoviesSeriesAboutComponent;
  let fixture: ComponentFixture<MoviesSeriesAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesSeriesAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesSeriesAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
