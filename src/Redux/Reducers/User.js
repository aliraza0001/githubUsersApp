import types from '../types';
// initialState for redux state
const initialState = {users: [], followers: [], user: {}, loading: false};
// export default as a user reducer from file
export default (state = initialState, action) => {
  //use switch for manage action base on types
  switch (action.type) {
    case types.apiLoading:
      return {...state, ...action.payload};
    case types.getUser:
      return {...state, ...action.payload};
    case types.getUsers:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
