import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {mvoiesComponents} from '../app/components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { AnimeMovieComponent } from './components/anime-movie/anime-movie.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent ,mvoiesComponents, MovieComponent, AnimeMovieComponent, TemplateDrivenFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
