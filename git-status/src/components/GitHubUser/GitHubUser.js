import React, { useEffect, useState } from "react";
import axios from "axios";

function GitHubUser() {
    const [user, setUser] = useState({});
    const [events, setEvents] = useState([]);

    useEffect(() => {
        function getUserAccount() {
            return axios.get('https://api.github.com/users/zac-higgins');
        }
        function getUserEvents() {
            return axios.get('https://api.github.com/users/zac-higgins/events')
        }
        axios
            //using my GitHub username for now to explore the data the api returns
            .all([getUserAccount(), getUserEvents()])
            .then(axios.spread((account, userEvents) => {
                console.log("Axios GitHubUser account info: ", account);
                console.log("Axios GitHubUser events", userEvents);
                setUser({ userName: account.data.login, name: account.data.name, profile: account.data.html_url, });
                const userEventsArray = userEvents.data
                userEventsArray.map((event) => {
                    setEvents([...events, { repo: event.repo.name }])
                })
            }))
            .catch(err => {
                console.log("The axios GitHubUser data was not returned", err);
            })
    }, []);

    // console.log("individual data log: ", events);
    return (
        <div className="gitHubUser">
            <h2>{user.name}</h2>
            <p>{user.userName}</p>
            {events.forEach(event => {
                return (
                    <p>{event}</p>

                )
            })}
        </div>
    );
};

export default GitHubUser;