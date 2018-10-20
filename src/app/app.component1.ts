import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

	mySubject$;

  ngOnInit() {
    //this.mySubject$ = new Subject();
this.mySubject$ = new BehaviorSubject(200);
	//this.mySubject$ = new ReplaySubject(200);
    this.mySubject$.subscribe(x => console.log('first subscribe', x));
    this.mySubject$.next(1);
    this.mySubject$.next(2);
	//this.mySubject$.complete();
    //this.mySubject$.unsubscribe();
    this.mySubject$.subscribe(x => console.log('second subscribe', x));
    this.mySubject$.next(3);
  }

  ngOnDestroy() {
    this.mySubject$.unsubscribe();
  }
}
