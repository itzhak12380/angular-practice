import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeMovieComponent } from './anime-movie.component';

describe('AnimeMovieComponent', () => {
  let component: AnimeMovieComponent;
  let fixture: ComponentFixture<AnimeMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
