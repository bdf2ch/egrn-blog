import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, mergeMap, take } from 'rxjs/operators';

import { BlogService } from '../services/blog.service';
import { BlogLoadListOfPosts, IApplicationState, selectLoadingDataInProgress } from '../store';

@Injectable({
  providedIn: 'root'
})
export class PostListGuard implements Resolve<boolean> {
  constructor(
    private readonly store: Store<IApplicationState>,
    private readonly blog: BlogService
  ) {}

  waitDataToLoad(): Observable<boolean> {
    return this.store.pipe(
      select(selectLoadingDataInProgress),
      filter((value: boolean) => value === false),
      take(1)
    );
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      this.store.dispatch(new BlogLoadListOfPosts());
      return this.waitDataToLoad()
        .pipe(
          mergeMap((fetching) => {
              return of(fetching);
          }),
          take(1)
        );
  }
}
