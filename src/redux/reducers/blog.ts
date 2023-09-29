import {
  GET_BLOG_LIST_SUCCESS,
  GET_BLOG_LIST_FAIL,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL,
} from '../action/types';

import {
  IBlogStage,
  BlogListSuccessAction,
  BlogListFailAction,
  BlogSuccessAction,
  BlogFailAction,
} from '../../interface/blogInterfaces';

// Create a union type for all possible action types
type BlogActionTypes =
  | BlogListSuccessAction
  | BlogListFailAction
  | BlogSuccessAction
  | BlogFailAction;

const initialState: IBlogStage = {
  blog_list: null,
  post: null,
  count: null,
  next: null,
  previous: null,
};

export default function blog(
  state = initialState,
  action: BlogActionTypes
): IBlogStage {
  switch (action.type) {
    case GET_BLOG_LIST_SUCCESS:
      return {
        ...state,
        blog_list: action.payload.results.post,
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
      };
    case GET_BLOG_LIST_FAIL:
      return {
        ...state,
        blog_list: null,
        post: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_BLOG_SUCCESS:
      return {
        ...state,
        post: action.payload.post,
      };

    case GET_BLOG_FAIL:
      return {
        ...state,
        post: null,
      };

    default:
      return state;
  }
}
