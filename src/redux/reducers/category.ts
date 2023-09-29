import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL } from '../action/types';
import {
  IPropsCategoryState,
  IPropsCategoryFail,
  IPropsCatergoriesSuccessAction,
} from '../../interface/categoryInterface';

const initialState: IPropsCategoryState = {
  categories: null,
};

type CategoryActionTypes = IPropsCatergoriesSuccessAction | IPropsCategoryFail;

export default function category(
  state = initialState,
  action: CategoryActionTypes
): IPropsCategoryState {
  const { type } = action;

  switch (type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories,
      };
    case GET_CATEGORIES_FAIL:
      return {
        ...state,
        categories: null,
      };
    default:
      return state;
  }
}
