import types from '../types';
//getUsers handle async request and update redux state base on response
export const getUsers = userName => {
  return async (dispatch, getState, {API}) => {
    try {
      const url = userName ? `users/${userName}` : 'users';
      const {status, data} = await API(url);
      if (status == 200)
        dispatch({
          type: types.getUsers,
          payload: {users: userName ? [data] : data},
        });
    } catch (error) {
      console.log(error);
    }
  };
};
//getUser handle async request and update redux state base on response
export const getUser = userName => {
  return async (dispatch, getState, {API}) => {
    try {
      const {status, data} = await API(`users/${userName}`);
      if (status == 200) dispatch({type: types.getUser, payload: {user: data}});
    } catch (error) {
      console.log(error);
    }
  };
};
//removeUser remove user data after closing the modal component
export const removeUser = () => {
  return dispatch => dispatch({type: types.getUser, payload: {user: {}}});
};
