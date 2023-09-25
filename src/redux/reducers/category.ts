import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL } from '../action/types';

const initialState = {
  categories: null,
};

export default function category(state = initialState, action: any) {
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
