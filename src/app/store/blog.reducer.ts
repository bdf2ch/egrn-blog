import {blogInitialState, IBlogState} from './blog.state';
import {BlogActions, BlogActionTypes} from './blog.actions';
import {IPost} from '../interfaces';
import {Post} from '../models';

/**
 * Редуктор блога
 * @param state - Состояние
 * @param action - Действие
 */
export function BlogReducer(
  state: IBlogState = blogInitialState,
  action: BlogActions
): IBlogState {
  switch (action.type) {

    case BlogActionTypes.BLOG_LOAD_LIST_OF_POSTS: {
      return {
        ...state,
        isLoadingDataInProgress: true,
      };
    }

    case BlogActionTypes.BLOG_LOAD_LIST_OF_POSTS_SUCCESS: {
      return {
        ...state,
        isLoadingDataInProgress: false,
        posts: action.payload.contents.map((item: IPost) => new Post(item)),
        selectedPost: null
      };
    }

    case BlogActionTypes.BLOG_LOAD_LIST_OF_POSTS_FAIL: {
      return {
        ...state,
        isLoadingDataInProgress: false
      };
    }

    case BlogActionTypes.BLOG_LOAD_POST: {
      return {
        ...state,
        isLoadingDataInProgress: true
      };
    }

    case BlogActionTypes.BLOG_LOAD_POST_SUCCESS: {
      return {
        ...state,
        isLoadingDataInProgress: false,
        selectedPost: new Post(action.payload)
      };
    }

    case BlogActionTypes.BLOG_LOAD_POST_FAIL: {
      return {
        ...state,
        isLoadingDataInProgress: false
      };
    }

    case BlogActionTypes.BLOG_SELECT_POST: {
      return {
        ...state,
        selectedPost: action.payload
      };
    }

    case BlogActionTypes.BLOG_OPEN_SIDE_BAR: {
      return {
        ...state,
        isSideBarOpened: true
      };
    }

    case BlogActionTypes.BLOG_CLOSE_SIDE_BAR: {
      return {
        ...state,
        isSideBarOpened: false
      };
    }

    default: {
      return state;
    }
  }
}
