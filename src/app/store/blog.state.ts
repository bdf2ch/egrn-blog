import { Post } from '../models';

/**
 * Интерфейс, описывающий состояние блога
 */
export interface IBlogState {
  isLoadingDataInProgress: boolean;
  posts: Post[];
}

/**
 * Начальное состояние блога
 */
export const blogInitialState: IBlogState = {
  isLoadingDataInProgress: false,
  posts: []
};

/**
 * Интерфейс, описывающий состояние приложения
 */
export interface IApplicationState {
  blog: IBlogState;
}
