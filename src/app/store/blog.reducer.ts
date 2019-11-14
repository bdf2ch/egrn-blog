import { blogInitialState, IBlogState } from './blog.state';
import { BlogActions, BlogActionTypes } from './blog.actions';
import {IPost} from "../interfaces";
import {Post} from "../models";

export function BlogReducer(
  state: IBlogState = blogInitialState,
  action: BlogActions
): IBlogState {
  switch (action.type) {

    case BlogActionTypes.BLOG_LOAD_LIST_OF_POSTS: {
      return {
        ...state,
        isLoadingDataInProgress: true
      };
    }

    case BlogActionTypes.BLOG_LOAD_LIST_OF_POSTS_SUCCESS: {
      return {
        ...state,
        isLoadingDataInProgress: false,
        posts: action.payload.contents.map((item: IPost) => new Post(item))
      };
    }

    case BlogActionTypes.BLOG_LOAD_LIST_OF_POSTS_FAIL: {
      return {
        ...state,
        isLoadingDataInProgress: false
      };
    }

    default: {
      return state;
    }
  }
}
