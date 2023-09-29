import { ActionTypes } from '../types/typeReducerBlog';

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

export interface GetBlogListSuccessAction {
  type: ActionTypes.GET_BLOG_LIST_SUCCESS; // Use ActionTypes
  payload: IBlogListData;
}

export interface GetBlogListFailAction {
  type: ActionTypes.GET_BLOG_LIST_FAIL; // Use ActionTypes
}
