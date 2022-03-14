import { Component, OnInit,ViewChild } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor(private MovieService:MovieService) { }
  @ViewChild("f") form:any;
  langs:Array<String> = ['english','hebrow','amharic']
  ngOnInit(): void {
    console.log("tamplate driven tamplate ", this.MovieService.getMovies());
  }
  
  public submitForm(){
    console.log(this.form);
  }
}
