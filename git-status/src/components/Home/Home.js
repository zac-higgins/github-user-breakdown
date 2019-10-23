import React from 'react';
import ListFavorites from '../Favorites/ListFavorites';
import SearchForm from "../Search/SearchForm";

function Home() {
  return (
    <div>
        <SearchForm />
        <ListFavorites />{/* Stretch idea: <SuggestedUsers /> If the user has no favorites display a message "You have no favorites yet, get started adding them:" and suggest random users (GitHub has an endpoint for that) */}
    </div>
  );
}

export default Home;
