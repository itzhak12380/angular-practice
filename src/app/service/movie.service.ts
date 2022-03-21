import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs';
import { EType } from '../components/models/movies.enum';
import { IMovie } from '../components/models/movies.intercae';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public random: number = Math.floor(Math.random() * 100);
  public MovieSubject$: Subject<IMovie> = new Subject();
  public init = {
    name: 'antman',
    rating: 6.2,
    releaseDate: new Date(),
    type:EType.fantasy,
  }
  public movieBehaivorSubject$: BehaviorSubject<IMovie> = new BehaviorSubject(this.init);
  private movies: IMovie[] = [];
  constructor() {}

  public getMovies() {
    return this.movies;
  }
  public setMovies(Movies: IMovie[]) {
    this.movies = [...this.movies, ...Movies];
  }
}
