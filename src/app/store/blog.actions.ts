import { Action } from '@ngrx/store';

import { IPost } from '../interfaces';
import { Post } from '../models';

/**
 * Типы действий в приложении
 */
export enum BlogActionTypes {
  BLOG_LOAD_LIST_OF_POSTS = '[Blog API] Load list of blog posts',
  BLOG_LOAD_LIST_OF_POSTS_SUCCESS = '[Blog API] List of blog posts loaded successfully',
  BLOG_LOAD_LIST_OF_POSTS_FAIL = '[Blog API] Failed to load list of blog posts',
  BLOG_LOAD_POST = '[Blog API] Load blog post',
  BLOG_LOAD_POST_SUCCESS = '[Blog API] Blog post loaded successfully',
  BLOG_LOAD_POST_FAIL = '[Blog API] Failed to load blog post',
  BLOG_SELECT_POST = '[Application] Select post',
  BLOG_OPEN_SIDE_BAR = '[Application] Open sidebar',
  BLOG_CLOSE_SIDE_BAR = '[Application] Close sidebar'
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
 * Загрузка поста блога с сервера
 */
export class BlogLoadPost implements Action {
  readonly type = BlogActionTypes.BLOG_LOAD_POST;
  constructor(public payload: string) {}
}

/**
 * Загрузка поста блога с сервера выполнена успешно
 */
export class BlogLoadPostSuccess implements Action {
  readonly type = BlogActionTypes.BLOG_LOAD_POST_SUCCESS;
  constructor(public payload: IPost) {}
}

/**
 * Загрузка поста блога с сервера не выполнена
 */
export class BlogLoadPostFail implements Action {
  readonly type = BlogActionTypes.BLOG_LOAD_POST_FAIL;
}

/**
 * Выбор текущего поста блога
 */
export class BlogSelectPost implements Action {
  readonly type = BlogActionTypes.BLOG_SELECT_POST;
  constructor(public payload: Post) {}
}

/**
 * Открытие боковой панели
 */
export class BlogOpenSideBar implements Action {
  readonly type = BlogActionTypes.BLOG_OPEN_SIDE_BAR;
}

/**
 * Закрытие боковой панели
 */
export class BlogCloseSideBar implements Action {
  readonly type = BlogActionTypes.BLOG_CLOSE_SIDE_BAR;
}

/**
 * Множество действий в приложении
 */
export type BlogActions =
  BlogLoadListOfPosts |
  BlogLoadListOfPostsSuccess |
  BlogLoadListOfPostsFail |
  BlogLoadPost |
  BlogLoadPostSuccess |
  BlogLoadPostFail |
  BlogSelectPost |
  BlogOpenSideBar |
  BlogCloseSideBar;
