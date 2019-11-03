import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';

const initialUserState = {
  currentUser: null,
  isLoading: true
};

const user_reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false
      };
    
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

/* this is for redux initial state, dont forget */
const initialChannelState = {
  currentChannel: null,
  isPrivateChannel: false,
  topPosters: null
};

/* For new case add here */
const channel_reducer = (state = initialChannelState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload.currentChannel
      };
    case actionTypes.SET_PRIVATE_CHANNEL:
      return {
        ...state,
        isPrivateChannel: action.payload.isPrivateChannel
      };
    case actionTypes.SET_TOP_POSTERS:
      return {
        ...state,
        topPosters: action.payload.topPosters
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: user_reducer,
  channel: channel_reducer
});

export default rootReducer;