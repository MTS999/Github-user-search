import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function LikedUsers(props) {
    const [userData, setUserData] = useState(null);
    const [repos, setRepos] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch(`https://api.github.com/users/${props.user}`);
                const userData = await response.json();
                setUserData(userData);
                console.log(userData)
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

            setShowModal(true); // Open the modal to display repos
        } catch (error) {
            console.error("Error fetching repositories:", error);
        }
    };

    return (
        <>
            {userData && (
                <div className="info">
                    <img src={userData.avatar_url} alt={userData.name} />
                    <h1>{userData.login}</h1>
                    <h1>Followers: {userData.followers}</h1>
                    <h1>Following: {userData.following}</h1>
                    <h1>Public Repos: {userData.public_repos}</h1>
                    <button
                        className="like"
                        onClick={() => props.dislike(userData.login)}>unlike3</button>
                    <button
                        className="show-repo"
                        onClick={fetchRepos}
                    >
                        Show Repo
                    </button>

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
