import {
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  AUTH_SUCCESS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  LOGOUT,
} from 'actions';

const initialState = {
  isLoading: false,
};

const getInitialState = () => {
  try {
    const serializedData = localStorage.getItem('userID');
    if (serializedData === null) {
      return initialState;
    }
    return { userID: serializedData, ...initialState };
  } catch (err) {
    return initialState;
  }
};

const rootReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item._id !== action.payload.id),
        ],
      };
    case LOGOUT: {
      const { userID, ...newState } = state;
      return {
        ...newState,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
