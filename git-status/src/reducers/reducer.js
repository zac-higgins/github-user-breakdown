import {
    FETCH_FAVORITES_START,
    FETCH_FAVORITES_SUCCESS,
    FETCH_FAVORITES_FAIL
  } from '../actions/actions.js';
  
  const initialState = {
    favorites: [],
    error: '',
    isFetching: false
  };
  
  function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case FETCH_FAVORITES_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_FAVORITES_SUCCESS:
        return {
          ...state,
          favorites: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_FAVORITES_FAIL:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;