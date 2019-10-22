import React from 'react';
import { getFavorites } from "../../actions/actions.js";
import Favorite from "./Favorite.js";

function ListFavorites() {

    useEffect(() => {
        props.getFavorites();
    }, [])

    if (props.error) return (<p>Error getting favorites, please reload page...</p>)//TODO: Reload page automatically

    if (props.isFetching) return (<p>Loading...</p>)

  return (
    <div>
        {favorites.map((favorite) => {
            <Favorite favorite={favorite}/>
        })}
    </div>
  );
}

export default ListFavorites;

const mapStateToProps = state => ({
    favorites: state.favorites, 
    error: state.error, 
    isFetching: state.isFetching
});

export default connect(
    mapStateToProps,
    { getFavorites }
)(ListFavorites);
