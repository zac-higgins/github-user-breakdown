import axios from 'axios';
import { AxiosWithAuth } from '../authorization/AxiosWithAuth';

export const FETCH_FAVORITES_START = 'FETCH_FAVORITES_START';
export const FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS';
export const FETCH_FAVORITES_FAIL = 'FETCH_FAVORITES_FAIL';

export const POST_FAVORITE_START = 'POST_FAVORITE_START';
export const POST_FAVORITE_SUCCESS = 'POST_FAVORITE_SUCCESS';
export const POST_FAVORITE_FAIL = 'POST_FAVORITE_FAIL';

export const FETCH_NOTES_START = 'FETCH_NOTES_START';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAIL = 'FETCH_NOTES_FAIL';

export const POST_NOTE_START = 'POST_NOTE_START';
export const POST_NOTE_SUCCESS = 'POST_NOTE_SUCCESS';
export const POST_NOTE_FAIL = 'POST_NOTE_FAIL';

// export const getFavorites = () => dispatch => {
//     dispatch({ type: FETCH_FAVORITES_START });
//     AxiosWithAuth()
//       .get(/*/api/favorites/userID*/)
//       .then(res => {
//         dispatch({ type: FETCH_FAVORITES_SUCCESS, payload: res.data })
//       }
//       )
//       .catch(err => dispatch({ type: FETCH_FAVORITES_FAIL, payload: err }));
//   };

// export const getNotes = () => dispatch => {
//   dispatch({ type: FETCH_NOTE_START });
//   AxiosWithAuth()
//     .get(/*/api/notes/userID*/)
//     .then(res => {
//       dispatch({ type: FETCH_NOTE_SUCCESS, payload: res.data })
//     }
//     )
//     .catch(err => dispatch({ type: FETCH_NOTE_FAIL, payload: err }));
// };

// export const postNote = (note) => dispatch => {
//     dispatch({ type: POST_NOTE_START });
//     AxiosWithAuth()
//       .post(/*/api/notes/userID*/"", note)//"note is a string"
//       .then(res => {
//         dispatch({ type: POST_NOTE_SUCCESS, payload: res.data })
//       }
//       )
//       .catch(err => dispatch({ type: FETCH_NOTE_FAIL, payload: err }));
//   };

  
//   export const postFavorite = (favoriteIDOrUsername) => dispatch => {
//     dispatch({ type: POST_FAVORITE_START });
//     AxiosWithAuth()
//       .post(/*/api/favorites/userID*/"", favorite)
//       .then(res => {
//         dispatch({ type: POST_FAVORITE_SUCCESS, payload: res.data })
//       }
//       )
//       .catch(err => dispatch({ type: POST_FAVORITE_FAIL, payload: err }));
//   };
  


/* HOW TO GET STATE IN YOUR COMPONENT EXAMPLE: (wrote this incase Zac wants to set up his components with Redux himself, but mostly just so I make sure I understand it myself)

Delete export default ComponentName, connect is what we'll export instead.

Add to end of functional component file:

const mapStateToProps = state => ({
    favorites: state.favorites, <--- props.favorites is now a thing inside component function
    error: state.error, <--- props.error is now a thing inside component function (use for displaying error message or handling error)
    isFetching: state.isFetching <--- props.isFetching is now a thing inside component function (use for displaying loading message)
});

export default connect(
    mapStateToProps,
    { getFavorites } <-- add whatever action functions from actions.js that you want redux to map to props here.
)(ComponentName);

Since we told redux we want access to the getFavorites action, we can then use it in the component to start fetching our favorites in a useEffect like this:

useEffect(() => {//this use effect will run once when the component is rendered, and then is a good time to fetch favorites
props.getFavorites();//favorites are now getting gotten. isFetching is now true. If it errors, props.error will have an error. If it succeeds, props.favorites will contain the user's favorite GitHub accounts.
}, [])
*/