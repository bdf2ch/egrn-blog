import { Action } from '@ngrx/store';

import { IPost } from '../interfaces';

/**
 * Типы действий в приложении
 */
export enum BlogActionTypes {
  BLOG_LOAD_LIST_OF_POSTS = '[Blog API] Load list of blog posts',
  BLOG_LOAD_LIST_OF_POSTS_SUCCESS = '[Blog API] List of blog posts loaded successfully',
  BLOG_LOAD_LIST_OF_POSTS_FAIL = '[Blog API] Failed to load list of blog posts'
}

/**
 * Загрузка списка постов блога с сервера
 */
export class BlogLoadListOfPosts implements  Action {
  readonly type = BlogActionTypes.BLOG_LOAD_LIST_OF_POSTS;
}

/**
 * Загрузка списка постов блога с сервера выполнена успешно
 */
export class BlogLoadListOfPostsSuccess implements Action {
  readonly type = BlogActionTypes.BLOG_LOAD_LIST_OF_POSTS_SUCCESS;
  constructor(public payload: {contents: IPost[], totalElements: number}) {}
}

/**
 * Загрузка списка постов блога с сервера не выполенна
 */
export class BlogLoadListOfPostsFail implements Action {
  readonly type = BlogActionTypes.BLOG_LOAD_LIST_OF_POSTS_FAIL;
}

/**
 * Множество действий в приложении
 */
export type BlogActions =
  BlogLoadListOfPosts |
  BlogLoadListOfPostsSuccess |
  BlogLoadListOfPostsFail;
