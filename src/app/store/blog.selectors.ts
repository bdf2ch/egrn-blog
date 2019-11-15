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
 * Селектор состяния видимости боковой панели
 */
export const selectSideBarOpened = createSelector(
  selectBlog,
  (state: IBlogState) => state.isSideBarOpened
);

/**
 * Селектор постов блога
 */
export const selectPosts = createSelector(
  selectBlog,
  (state: IBlogState) => state.posts
);

/**
 * Селектор текущего поста блога
 */
export const selectSelectedPost = createSelector(
  selectBlog,
  (state: IBlogState) => state.selectedPost
);

