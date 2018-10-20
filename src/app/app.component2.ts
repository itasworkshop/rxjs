import { Component } from '@angular/core';
import { Observable, Subscription, interval, pipe , of} from 'rxjs';
import { map, take, tap, filter, mergeMap, switchMap} from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
	//const numbers$ = interval(1000).pipe(take(10));
   /*const numbers$ = interval(1000)
			.pipe(
   			take(10),
   			map((x) => x * x),
			filter(x => x>20)
			);

    numbers$.subscribe(x => console.log(x));



	const numbers$ = interval(1000).pipe(take(5));
	const letters$ = of('a','b','c','d');

	letters$.pipe(switchMap(x =>
		numbers$.pipe(take(5),map(i => i+x))
	)).subscribe(x => console.log(x));
*/
	const oneClickEvent = fromEvent(document, 'click').pipe().subscribe(x => console.log(x));

/*
	const oneClickEvent = fromEvent(document, 'click').pipe(
	  take(1),
	  tap(v => {
	    document.getElementById(
	      'locationDisplay'
	    ).innerHTML = `Your first click was on location ${v.screenX}:${v.screenY}`;
	  })
	);


	const subscribe = oneClickEvent.subscribe();
*/
  }

  ngOnDestroy() {
  }
}
