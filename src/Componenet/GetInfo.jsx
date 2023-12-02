import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function GetInfo(props) {
    const token = import.meta.env.VITE_REACT_APP_API_KEY;

    const [userData, setUserData] = useState(null);
    // const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function fetchUserData() {
            try {                        
                //https://api.github.com/search/users?q=${props.user}&per_page=5`

            const res = await fetch(`https://api.github.com/search/users?q=${props.user}&per_page=3`, {
                headers: {
                    Authorization: `token ${token}`
                }
            });
            
                const data = await res.json();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }

        fetchUserData();
    }, [props.user, token]);

    const fetchRepos = async (mts) => {
        try {

            // const response = await fetch(`https://api.github.com/users/${mts}/repos`);
            const response = await fetch(`https://api.github.com/users/${mts}/repos`);
            const reposData = await response.json();
            props.repo(reposData)
            // Handle the fetched repositories (e.g., setRepos(reposData))
        } catch (error) {
            console.error("Error fetching repositories:", error);
        }
    };

    const handleLikeButton = (userLogin) => {
        props.like(userLogin);
        // console.log(userLogin);
    };


    return (
        <>
            {userData && userData.items && userData.items.length > 0 && (
                <div>
                    {userData.items.map((user) => (
                        <div key={user.id} className="info">
                            <img src={user.avatar_url} alt={user.login} />
                            <h1>{user.login}</h1>
                            <h1>Followers: {user.followers}</h1>
                            <h1>Following: {user.following}</h1>
                            <h1>Public Repos: {user.public_repos}</h1>
                            <button
                                className="like"
                                onClick={() => handleLikeButton(user.login)}
                                disabled={props.liked.includes(user.login)}
                            >
                                {props.liked.includes(user.login) ? 'liked' : 'like'}

                                {/* {props.isLike ? 'liked' : 'like'} */}
                            </button>
                            <button
                                className="show-repo"
                                onClick={() => fetchRepos(user.login)}
                            >
                                Show Repo
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

GetInfo.propTypes = {
    user: PropTypes.string.isRequired,
    repo: PropTypes.func.isRequired,
    like: PropTypes.func.isRequired,
    // isLike: PropTypes.bool.isRequired,
    liked: PropTypes.array.isRequired,
};
