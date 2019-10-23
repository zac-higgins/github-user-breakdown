import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function SearchResult(props) {

    console.log("SearchResult", props.result)

    return (
        <div>
            <Link to={"/user/" + props.result.login}>
                <img src={props.result.avatar_url} />
                <p>{props.result.login}</p>
            </Link>
        </div>
    );
}

export default SearchResult;
