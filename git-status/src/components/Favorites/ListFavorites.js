import React, {useEffect} from 'react';
import Favorite from "./Favorite.js";
import { connect } from "react-redux";
import {getFavorites} from "../../actions/actions";

function ListFavorites(props) {

    useEffect(() => {
        props.getFavorites(props.userID);
    }, [])

    if (props.error) return (<p>Error getting favorites, please reload page...</p>)//TODO: Reload page automatically

    if (props.isFetching) return (<p>Loading...</p>)

    if (props.favorites.length <= 0) return (<p>You have no favorite users yet! Add some: (we could suggest users here)</p>)

  return (
    <div>
        {props.favorites.map((favorite) => {
            return <Favorite favorite={favorite}/>
        })}
    </div>
  );
}

const mapStateToProps = state => ({
    userID: state.userID,
    favorites: state.favorites, 
    error: state.error, 
    isFetching: state.isFetchingFavorites
});

export default connect(
    mapStateToProps,
    { getFavorites }
)(ListFavorites);
