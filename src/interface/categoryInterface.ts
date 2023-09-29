import {
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from '../redux/action/types';

export interface IPropsCategoryState {
  categories: string[] | null;
}

export interface IPropsCatergoriesSuccessAction {
  type: typeof GET_CATEGORIES_SUCCESS;
  payload: {
    categories: string[] | null;
  };
}

export interface IPropsCategoryFail {
  type: typeof GET_CATEGORIES_FAIL;
}
