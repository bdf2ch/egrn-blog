import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {
  BlogActionTypes,
  BlogLoadListOfPostsFail,
  BlogLoadListOfPostsSuccess,
  BlogLoadPost, BlogLoadPostFail, BlogLoadPostSuccess
} from '../store/blog.actions';
import { BlogService } from '../services/blog.service';
import { IPost } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlogEffects {
  constructor(
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly blog: BlogService
  ) {}

  @Effect()
  loadListOfPosts$ = this.actions$.pipe(
    ofType(BlogActionTypes.BLOG_LOAD_LIST_OF_POSTS),
    mergeMap(() => this.blog.getListOfPosts()
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

  @Effect()
  loadPost$ = this.actions$.pipe(
    ofType(BlogActionTypes.BLOG_LOAD_POST),
    mergeMap((action) => this.blog.getPostByUrl((action as BlogLoadPost).payload)
      .pipe(
        map((response: IPost) => {
          return new BlogLoadPostSuccess(response);
        }),
        catchError(() => {
          this.router.navigate(['/404']);
          return of(new BlogLoadPostFail());
        })
      )
    )
  );
}
