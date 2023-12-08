import PropTypes from "prop-types";
import { useState, useEffect } from "react";


export default function GetInfo(props) {
    const token = import.meta.env.VITE_REACT_APP_API_KEY;

    const [userData, setUserData] = useState([]);
    const [username, setUsername] = useState([]);

    console.log(userData)


    useEffect(() => {
        async function fetchUserData() {
            try {
                const res = await fetch(`https://api.github.com/search/users?q=${props.user}&per_page=15`
                    , {
                        header: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const data = await res.json();
                setUsername(data.items);

            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }

        fetchUserData();
    }, [props.user, token]);



    useEffect(() => {
        const fetchData = async () => {
            if (username && Array.isArray(username)) {
                try {
                    const fetchedData = await Promise.all(username.map(async (element) => {
                        const response = await fetch(`https://api.github.com/users/${element.login}`
                            , {
                                header: {
                                    Authorization: `Bearer ${token}`
                                }
                            }
                        );

                        return response.json();
                    }));
                    setUserData(fetchedData);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchData();
    }, [username, token]);






    const fetchRepos = async (mts) => {

        if (props.extrarepo.length && mts === props.extrarepo[0].owner.login) {
            props.repo([])

        }
        else {

            try {

                const response = await fetch(`https://api.github.com/users/${mts}/repos`
                    , {
                        header: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const reposData = await response.json();
                props.repo(reposData)



            } catch (error) {
                console.error("Error fetching repositories:", error);
            }
        }
    };
    if (props.extrarepo.length > 0) {

        console.log(props.extrarepo[0].owner.login)
    }

    const handleLikeButton = (userLogin) => {
        props.like(userLogin);
    };


    return (
        <>
            {userData && userData.length > 0 && (
                <div className="infocard-containor">
                    {userData.map((user) => (
                        <div key={user.id} className="info">
                            <div className="profile-img">

                                <img src={user.avatar_url} alt={user.login} />
                            </div>
                            <div className="profile-info">

                                <a className="profile-link"
                                 target="__blank"  
                                    href={user.html_url}

                                ><h3>{user.login}</h3></a>
                                <span>
                                    Followers: {user.followers}
                                </span>
                                <span>
                                    Following: {user.following}                                </span>
                                <h3>Public repositories: {user.public_repos}</h3>
                                <button
                                    className="like"
                                    onClick={() => handleLikeButton(user.login)}
                                    disabled={props.liked.includes(user.login)}
                                >
                                    {props.liked.includes(user.login) ? 'liked' : 'like'}

                                </button>
                                <button
                                    className="show-repo"
                                    onClick={() => fetchRepos(user.login)}
                                >

                                    {props.extrarepo.length > 0 && props.extrarepo[0].owner.login === user.login
                                        ? "hide repositories" : "show repositories"}
                                </button>

                            </div>
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
    liked: PropTypes.array.isRequired,
    extrarepo: PropTypes.array.isRequired
};
