import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IApplicationState, IBlogState } from './blog.state';

/**
 * Селектор дерева параметро сосотяния блога
 */
export const selectBlog = createFeatureSelector<IApplicationState, IBlogState>('blog');

/**
 * Селектор состяния загрузки данных с сервера
 */
export const selectLoadingDataInProgress = createSelector(
  selectBlog,
  (state: IBlogState) => state.isLoadingDataInProgress
);

/**
 * Селектор постов блога
 */
export const selectPosts = createSelector(
  selectBlog,
  (state: IBlogState) => state.posts
);
