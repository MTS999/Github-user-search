import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function LikedUsers(props) {
    const [userData, setUserData] = useState(null);


    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch(`https://api.github.com/users/${props.user}`);
                const userData = await response.json();
                setUserData(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }

        fetchUserData();
    }, [props.user]);

    const fetchRepos = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${props.user}/repos`);
            const reposData = await response.json();
            props.repo(reposData)

        } catch (error) {
            console.error("Error fetching repositories:", error);
        }
    };

    return (
        <>
            {userData && (
                <div className="info">
                    {/* <img src={userData.avatar_url} alt={userData.name} /> */}
                    <div className="profile-img">

                        <img src={userData.avatar_url} alt={userData.login} />
                    </div>
                    <div className="profile-info">

                        <h3>{userData.login}</h3>
                        <span>
                            Followers: {userData.followers}
                        </span>
                        <span>
                            Following: {userData.following}                                </span>
                        <h3>Public Repos: {userData.public_repos}</h3>
                        <button
                            className="like"
                            onClick={() => props.dislike(userData.login)}>Remove</button>
                        <button
                            className="show-repo"
                            onClick={fetchRepos}
                        >
                            Show Repo
                        </button>

                    </div>
                  


                </div>
            )}
        </>
    );
}

LikedUsers.propTypes = {
    user: PropTypes.string.isRequired,
    repo: PropTypes.func.isRequired,
    dislike: PropTypes.func.isRequired,

};
