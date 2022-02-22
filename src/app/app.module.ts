import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {mvoiesComponents} from '../app/components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component'

@NgModule({
  declarations: [
    AppComponent ,mvoiesComponents, MovieComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
