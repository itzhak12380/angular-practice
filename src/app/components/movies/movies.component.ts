import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { EType } from '../models/movies.enum';
import { IMovie } from '../models/movies.intercae';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class mvoiesComponents
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  constructor(private movieService:MovieService){}
  @Input() list: string[] = [];
  public movieList: IMovie[] = [
    {
      name: 'iron man',
      rating: 7.1,
      releaseDate: new Date(),
      type:EType.action,
    },
    {
      name: 'spider man',
      rating: 8.5,
      releaseDate: new Date(),
      type:EType.drama,
    },
    {
      name: 'Hulk',
      rating: 7.9,
      releaseDate: new Date(),
      type:EType.fantasy,
    },
  ];

  public deleteMovie(movieIndex:number){
        this.movieList.splice(movieIndex,1)
  }
  ngOnInit(): void {
    // console.log('on init doring ', this.movieService.setMovies(this.movieList));
    // console.log('on init after ', this.movieService.getMovies());
    this.movieService.movieBehaivorSubject$.subscribe(data =>{
        this.movieList = [...this.movieList,data]
    })
    // this.movieService.movieBehaivorSubject$.subscribe()
    
  }
  title = 'mvoiesComponents  works';
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }
  ngAfterViewInit() {
    // console.log('after view init');
  }
  ngOnDestroy() {
    // console.log('on destroy');
  }
}
