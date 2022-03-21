import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { EType } from '../models/movies.enum';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  constructor(private MovieService: MovieService) {}
  @ViewChild('f') form: any;
  langs: Array<String> = ['english', 'hebrow', 'amharic'];
  ngOnInit(): void {
    // console.log("tamplate driven tamplate ", this.MovieService.getMovies());
    // this.MovieService.MovieSubject$.subscribe
  }

  public submitForm() {
    console.log(this.form);
  }
  public addMovie() {
    // this.MovieService.MovieSubject$.next({
    //   name: 'batman',
    //   rating: 8.9,
    //   releaseDate: new Date(),
    //   type: EType.fantasy,
    // });
    this.MovieService.movieBehaivorSubject$.next({
        name: 'flash',
        rating: 8.2,
        releaseDate: new Date(),
        type: EType.fantasy,
      })
    
  }
}
