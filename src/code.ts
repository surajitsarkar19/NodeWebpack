import { Observable, Subscription, Subject, of, fromEvent, from, empty, merge, timer } from 'rxjs';
import { map, mapTo, switchMap, tap, mergeMap, takeUntil, filter, finalize } from 'rxjs/operators';

console.log(Observable);
console.log(Subscription);