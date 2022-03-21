import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/service/albums.service';
import { IAlbums } from '../models/albums.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor(public apiService:AlbumsService) { }

  public tableTitle:Array<string> = ["id","userId","title"]
  public albums:Array<IAlbums> | undefined ;

  ngOnInit(): void {
     this.apiService.getAlbums().subscribe(data =>{
       console.log(data);
       this.albums = data
     }) 
    
  }

}
