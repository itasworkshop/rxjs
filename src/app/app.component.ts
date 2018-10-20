import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable, Subscription, interval, pipe , of} from 'rxjs';
import { map, take, tap, filter, mergeMap, switchMap, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
	searchSubject$ = new Subject<string>();

  ngOnInit() {
	this.searchSubject$.pipe(debounceTime(200)).subscribe(x=> console.log('debounce: ',x));
  }

inputChanged($event) {
    console.log('input changed', $event);
    this.searchSubject$.next($event);
  }
*/

constructor(private http: HttpClient){}
  searchSubject$ = new Subject<string>();
  results$: Observable<any>;

  ngOnInit() { 
    this.results$ = this.searchSubject$.pipe(debounceTime(400),
         distinctUntilChanged(),
	tap(x => console.log('do', x)),
      	switchMap(searchString => this.queryAPI(searchString))
	);

  }

queryAPI(searchString){
  console.log('queryAPI', searchString);
  return this.http.get(`https://www.reddit.com/r/aww/search.json?q=${searchString}`)
  .pipe(map(result => result['data']['children']));
}

  inputChanged($event) {
    console.log('input changed', $event);
    this.searchSubject$.next($event);
  }
  ngOnDestroy() {
  }
}
