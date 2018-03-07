import { Observable } from 'rxjs/Observable'

const test = Observable.create((observer) => {
	observer.next('first');
	observer.next('last');
	observer.complete();
})


test.subscribe((next) => {
	console.log('Next', next);
}, () => {},
(complete) => {
	console.log('complete', complete);
})

