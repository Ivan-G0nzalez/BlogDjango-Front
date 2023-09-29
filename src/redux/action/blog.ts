import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from '../../types/typeReducerBlog';

import { GET_BLOG_SUCCESS, GET_BLOG_FAIL } from './types';

import {
  IBlogListData,
  GetBlogListSuccessAction,
  GetBlogListFailAction,
} from '../../interface/reducerActionBlogInterface';

type BlogActionTypes = GetBlogListSuccessAction | GetBlogListFailAction;

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

export const get_blog_list_page =
  (p: string) => async (dispatch: Dispatch<BlogActionTypes>) => {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };

    try {
      const res = await axios.get<IBlogListData>(
        `${import.meta.env.VITE_APP_API_URL}/api/blog/?p=${p}`,
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
      }
    } catch {
      dispatch({
        type: ActionTypes.GET_BLOG_LIST_FAIL,
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
