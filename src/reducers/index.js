// import { ADD_ITEM, REMOVE_ITEM, AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from 'actions';
import { ADD_ITEM, REMOVE_ITEM, AUTH_SUCCESS, FETCH_SUCCESS } from 'actions';

const initialState = {
  userID: '5f95b722f12b99003fbdf961', // in future save it in localStorage
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item._id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
