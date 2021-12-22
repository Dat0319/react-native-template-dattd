import {
  PROFILE,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
} from '../actions/type';
const initialState = {
  isLoading: false,
  error: null,
  data: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case PROFILE_FAIL:
      return {
        isLoading: false,
        data: action.payload,
      };
    case UPDATE_PROFILE:
      return {
        isLoading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        isLoading: true,
      };
    case UPDATE_PROFILE_FAIL:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};
