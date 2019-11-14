import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { BlogActionTypes, BlogLoadListOfPostsFail, BlogLoadListOfPostsSuccess } from '../store/blog.actions';
import { BlogService } from '../services/blog.service';
import { IPost } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlogEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly blog: BlogService
  ) {}

  @Effect()
  loadListOfPosts$ = this.actions$.pipe(
    ofType(BlogActionTypes.BLOG_LOAD_LIST_OF_POSTS),
    mergeMap(() => this.blog.loadListOfPosts()
      .pipe(
        map((response: {contents: IPost[], totalElements: number}) => {
          return new BlogLoadListOfPostsSuccess(response);
        }),
        catchError((error) => {
          return of(new BlogLoadListOfPostsFail());
        })
      )
    )
  );
}
