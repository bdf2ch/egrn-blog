import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, mergeMap, take, withLatestFrom } from 'rxjs/operators';

import { Post } from '../models';
import {
  BlogLoadPost,
  BlogSelectPost,
  IApplicationState,
  selectLoadingDataInProgress,
  selectPosts,
  selectSelectedPost
} from '../store';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsGuard implements CanActivate {
  private posts$: Observable<Post[]>;
  private posts: Post[];

  constructor(
    private router: Router,
    private readonly store: Store<IApplicationState>,
  ) {
    this.posts$ = this.store.pipe(select(selectPosts));
    this.posts = [];
    this.posts$.subscribe((value: Post[]) => {
      this.posts = value;
    });
  }

  checkPost(): Observable<boolean> {
    return this.store.pipe(
      select(selectLoadingDataInProgress),
      filter((value: boolean) => value === false),
      take(1)
    );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const post: Post = this.posts.find((item: Post) => `/${item.urlName}` === state.url);
    if (post) {
      this.store.dispatch(new BlogSelectPost(post));
      return of(true);
    } else {
      this.store.dispatch(new BlogLoadPost(state.url));
      return this.checkPost()
        .pipe(
          withLatestFrom(this.store.pipe(select(selectSelectedPost))),
          mergeMap(([fetching, selectedPost]) => {
            if (!selectedPost) {
              this.router.navigate(['/404']);
              return of(false);
            } else {
              return of(true);
            }
          }),
          take(1)
        );
    }
  }
}
