import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {mvoiesComponents} from '../app/components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { AnimeMovieComponent } from './components/anime-movie/anime-movie.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import {FormsModule} from '@angular/forms';
import { AlbumsComponent } from './components/albums/albums.component'
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent ,mvoiesComponents, MovieComponent, AnimeMovieComponent, TemplateDrivenFormComponent, AlbumsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
