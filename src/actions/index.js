import * as actionTypes from './types';

/* User Action */
export const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: user
    }
  };
};

export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER
  };
};

/* Channel Action */
export const setCurrentChannel = channel => {
  return {
    type: actionTypes.SET_CURRENT_CHANNEL,
    payload: {
      currentChannel: channel
    }
  }
}

/* Make Private Channel */
export const setPrivateChannel = isPrivateChannel => {
  return {
    type: actionTypes.SET_PRIVATE_CHANNEL,
    payload: {
      isPrivateChannel
    }
  }
}

/* Get User Post */
export const setTopPosters = topPosters => {
  return {
    type: actionTypes.SET_TOP_POSTERS,
    payload: {
      topPosters
    }
  }
}

