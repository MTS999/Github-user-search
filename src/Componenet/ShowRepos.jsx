import PropTypes from "prop-types"


export default function ShowRepos(props){


// console.log(typeof(props.repo))
// console.log(props.repo)

    return(
        <>
        <div className="repos-list">
        <h2>Repositories:</h2>
        <ul>
            {props.repo.map(reposs => (
                <li key={reposs.id}>
                      <h1>{reposs.full_name}</h1>
                      <a href={reposs.html_url} target="_blank" rel="noopener noreferrer">
                        {reposs.name}
                    </a>
                </li>
            ))

            }
        </ul>
    </div>
    <h1>hujik</h1>
        </>
    )
}





ShowRepos.propTypes = {
    repo: PropTypes.array.isRequired
}