import {
  GET_BLOG_LIST_SUCCESS,
  GET_BLOG_LIST_FAIL,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL,
} from '../redux/action/types';

// Define the interface for the initial state
export interface IBlogStage {
  blog_list: string[] | null;
  post: string | null;
  count: number | null;
  next: string | null;
  previous: string | null;
}

// Define the action payload interfaces
export interface BlogListSuccessAction {
  type: typeof GET_BLOG_LIST_SUCCESS;
  payload: {
    results: {
      post: string[];
    };
    count: number | null;
    next: string | null;
    previous: string | null;
  };
}

export interface BlogListFailAction {
  type: typeof GET_BLOG_LIST_FAIL;
}

export interface BlogSuccessAction {
  type: typeof GET_BLOG_SUCCESS;
  payload: {
    post: string;
  };
}

export interface BlogFailAction {
  type: typeof GET_BLOG_FAIL;
}

export interface IBlogListItem {
  blog_uuid: string;
  title: string;
  slug: string;
  thumbnail: string;
  video: string;
  description: string;
  excerpt: string;
  published: string;
  status: string;
}

export interface IBlogListData {
  results: IBlogListItem[];
  count: number;
  next: string | null;
  previous: string | null;
}
