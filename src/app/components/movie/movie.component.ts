import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { EType } from '../models/movies.enum';
import {IMovie} from '../models/movies.intercae'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor() {
  }

   get MovieType () {
    return EType
  }
  @Input() movie: IMovie =  {
    name: 'iDSFSDF',
    rating: 7.1,
    releaseDate: new Date(),
    type:EType.action,
  }
  @Input() borderWidth:number = 1
  @Input() movieIndex:number = 1
  @Output() onDeleteMovie: EventEmitter<number> = new EventEmitter()

  public DeleteMovie(){
  // console.log(this.movieIndex);
  this.onDeleteMovie.emit(this.movieIndex)
  }

  ngOnInit(): void {   
  }
}
