import { Injectable } from '@angular/core';
import {IMovie} from '../components/models/movies.intercae'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public random:number = Math.floor(Math.random()*100)
  private movies:IMovie[] = [] ;
  constructor() { }

  public getMovies(){
   return this.movies
  }
  public setMovies(Movies:IMovie[]){
    this.movies = [...this.movies,...Movies]
  }
}
