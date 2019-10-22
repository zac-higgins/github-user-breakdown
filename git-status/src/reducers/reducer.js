import {
    FETCH_FAVORITES_START,
    FETCH_FAVORITES_SUCCESS,
    FETCH_FAVORITES_FAIL,
    POST_FAVORITE_START,
    POST_FAVORITE_SUCCESS,
    POST_FAVORITE_FAIL,
    FETCH_NOTES_START,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_FAIL,
    POST_NOTE_START,
    POST_NOTE_SUCCESS,
    POST_NOTE_FAIL
  } from '../actions/actions.js';
  
  const initialState = {
    favorites: [],
    userNotes: [],//example content {userID: 0, notes: ["example note", "noteeeeeee"]} to get notes: let notes = props.userNotes.Find((note) => note.userID === theIDOfTheUserThatYouWantToFindNotesOn).notes
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