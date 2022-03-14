import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'class-one';

  isDone = true;
  toggleComponent(){
    this.isDone = !this.isDone
    
  }
}
