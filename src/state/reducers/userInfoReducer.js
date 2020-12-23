import { LOADING, SUCCESS, ERROR } from '../actions';

const initialState = {
  userInfo: null,
  loading: false,
  error: '',
};

export const userInfoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true, error: '' };
    case SUCCESS:
      return { ...state, loading: false, userInfo: payload };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
