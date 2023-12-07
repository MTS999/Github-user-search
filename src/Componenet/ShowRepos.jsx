import PropTypes from "prop-types"


export default function ShowRepos(props) {



    return (
        <>
            <div className="repos-list">
                {props.repo.length > 0 && (
                    <h1>Repositories:</h1>
                )}
                <ul>


                    {props.repo.map(reposs => (
                        <li key={reposs.id}>
                            <h2>{reposs.full_name}</h2>
                            <a href={reposs.html_url} target="_blank" rel="noopener noreferrer">
                                {reposs.html_url}
                            </a>
                        </li>
                    ))

                    }
                </ul>
            </div>
        </>
    )
}





ShowRepos.propTypes = {
    repo: PropTypes.array.isRequired
}