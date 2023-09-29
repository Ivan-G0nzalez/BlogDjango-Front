import axios from 'axios';
import { Dispatch } from 'redux';

import {
  GET_BLOG_LIST_SUCCESS,
  GET_BLOG_LIST_FAIL,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL,
  GET_BLOG_PAGINATION_RESULTS_SUCCESS,
  GET_BLOG_PAGINATION_RESULTS_FAIL,
} from './types';

import { IBlogListData } from '../../interface/blogInterfaces';

interface IBlogStateProps {
  blogList: IBlogListData;
}

// Define your action types enum
enum ActionTypes {
  GET_BLOG_LIST_SUCCESS = 'GET_BLOG_LIST_SUCCESS',
  GET_BLOG_LIST_FAIL = 'GET_BLOG_LIST_FAIL',
}

// Define your action interfaces
interface GetBlogListSuccessAction {
  type: ActionTypes.GET_BLOG_LIST_SUCCESS; // Use ActionTypes
  payload: IBlogListData;
}

interface GetBlogListFailAction {
  type: ActionTypes.GET_BLOG_LIST_FAIL; // Use ActionTypes
}

// Define a union type for all possible action types
type BlogActionTypes = GetBlogListSuccessAction | GetBlogListFailAction;

// Segunda Functions

// Define your action creator
export const get_blog_list =
  () => async (dispatch: Dispatch<BlogActionTypes>) => {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };

    try {
      const res = await axios.get<IBlogListData>(
        `${import.meta.env.VITE_APP_API_URL}/api/blog/`,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: ActionTypes.GET_BLOG_LIST_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ActionTypes.GET_BLOG_LIST_FAIL,
        });
        console.log('No entro');
      }
    } catch {
      dispatch({
        type: ActionTypes.GET_BLOG_LIST_FAIL,
      });
    }
  };

export const get_blog_list_page = (p: string) => async (dispatch: any) => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/api/blog/?p=${p}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BLOG_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BLOG_LIST_FAIL,
      });
    }
  } catch {
    dispatch({
      type: GET_BLOG_LIST_FAIL,
    });
  }
};

export const get_blog = (slug: any) => async (dispatch: any) => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/api/blog/${slug}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BLOG_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BLOG_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BLOG_FAIL,
    });
  }
};
