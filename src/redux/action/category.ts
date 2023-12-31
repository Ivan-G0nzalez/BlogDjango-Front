import axios from 'axios';

import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL } from './types';

export const get_categories = (slug: any) => async (dispatch: any) => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API}/api/category/categories`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_CATEGORIES_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CATEGORIES_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_CATEGORIES_FAIL,
    });
  }
};
