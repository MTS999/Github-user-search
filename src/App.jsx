import React from 'react'
import './App.css'
import Header from "./Componenet/Header"
import GetInfo from './Componenet/GetInfo'
import UserInput from './Componenet/UserInput'
import ShowRepos from './Componenet/ShowRepos'
import LikedUsers from './Componenet/LikedUsers'
function App() {

  const [user, setUser] = React.useState("")
  const [reooData, setRepoData] = React.useState([])
  const [liked, setlike] = React.useState([])
  const [likebutton, setLikebutton] = React.useState(false)


  function handleUserName(id) {
    setUser(id)
  }
  function allrepodata(data) {
    setRepoData(data)

  }


  function hanldlelike(mts) {
    setlike(prevItems => [...prevItems, mts]);

  }
  function handleDislike(removeitem) {
    setlike(prevArray => prevArray.filter(item => item !== removeitem));

  }

  function handlelikebutton() {
    setLikebutton(prevItems => !prevItems);

  }
  const LikedUser = liked.map(mts => {

    return (
      <LikedUsers
        key={mts}
        user={mts}
        repo={allrepodata}
        dislike={handleDislike}
      />
    )
  })

  return (
    <>
      <div className="test">
        <div className="repos">
          <ShowRepos
            repo={reooData}
          />
        </div>
        <div className="main_container">

          <Header />
          <UserInput
            username={handleUserName}

          />
          <div className="allUsers">

            {user.length > 0 && <GetInfo
              key={1}

              user={user}

              repo={allrepodata}

              extrarepo={reooData}

              liked={liked}

              like={hanldlelike}

            />}

          </div>
        </div>
        <div className="liked">
          {liked.length > 0 &&
            <div className='box'>
              <button
                className='likebutton'
                onClick={handlelikebutton}
              >
                liked profiles
              </button>
              {likebutton &&

                <div className="like-component">

                {likebutton && LikedUser}

              </div>
              }
            </div>
          }
        </div>

      </div>

    </>
  )
}

export default App


