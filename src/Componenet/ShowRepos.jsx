import PropTypes from "prop-types"


export default function ShowRepos(props) {

    function removerepodata() {
        props.removeallrepodata(2)
    }

    return (
        <>
            <div className="repos-list">

                <div className="repohead">

                    <h1>Repositories:</h1>
                    <button
                        className="close-btn" y
                        onClick={removerepodata}
                    >
                        close
                    </button>
                </div>

                <div className="repo-data">

                    <ul>


                        {props.repo.map(reposs => (

                            <li key={reposs.id}>
                                <div className="mts">
                                    <h3>{reposs.full_name}</h3>
                                    <a className="repo-link" href={reposs.html_url} target="_blank" rel="noopener noreferrer">
                                        {reposs.html_url}
                                    </a>
                                </div>
                            </li>
                        ))

                        }
                    </ul>
                </div>

            </div>
        </>
    )
}





ShowRepos.propTypes = {
    repo: PropTypes.array.isRequired,
    removeallrepodata: PropTypes.func.isRequired,

}



