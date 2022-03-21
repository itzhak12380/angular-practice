import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbums } from '../components/models/albums.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private api:HttpClient) { }
  
  public getAlbums():Observable<Array<IAlbums>>{
    const apiString:string = "https://jsonplaceholder.typicode.com/albums"
    return this.api.get(apiString) as Observable<Array<IAlbums>>
  }
}
