import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'class-one';

  isDone = true;
  toggleComponent() {
    this.isDone = !this.isDone;
  }
  public Obserbales: Observable<any> = new Observable((observer) => {
    observer.next('start');

    setTimeout(() => {
      observer.next('working...');
    }, 3000);
    setTimeout(() => {
      observer.complete();
    }, 6000);
  });
  ngOnInit(): void {
    console.log('oninit');
    this.Obserbales.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );

    console.log("after subscription");
    
    // this.Obserbales.MovieSubject$.subscribe()
  }
}
