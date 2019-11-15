import { Post } from '../models';

/**
 * Интерфейс, описывающий состояние блога
 */
export interface IBlogState {
  isLoadingDataInProgress: boolean;   // Выполняется ли загрузка данных
  isSideBarOpened: boolean;           // Открыта ли боковая панель
  posts: Post[];                      // Перечень постов
  selectedPost: Post;                 // Текущий пост
}

/**
 * Начальное состояние блога
 */
export const blogInitialState: IBlogState = {
  isLoadingDataInProgress: false,
  isSideBarOpened: false,
  posts: [],
  selectedPost: null
};

/**
 * Интерфейс, описывающий состояние приложения
 */
export interface IApplicationState {
  blog: IBlogState;
}
