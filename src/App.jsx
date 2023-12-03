import React from 'react'
import { useEffect } from "react"
// import {githubUsers} from "./Data"
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


  function handleUserName(id) {
    setUser(id)
  }
  function allrepodata(data) {
    setRepoData(data)

  }
  console.log(reooData)


  function hanldlelike(mts) {
    setlike(prevItems => [...prevItems, mts]);

  }
  // console.log(liked)
  function handleDislike(removeitem) {
    setlike(prevArray => prevArray.filter(item => item !== removeitem));

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
        <Header />
        <UserInput
          username={handleUserName}

        />
        <div className='contant'>


          <div className="repos">
            <ShowRepos
              repo={reooData}
            />
          </div>
          <div className="allUsers">

            <GetInfo
              key={1}

              user={user}

              repo={allrepodata}

             extrarepo={reooData}

              liked={liked}

              like={hanldlelike}

            />

            


          </div>
          <div className="liked">

              {LikedUser}
            </div>
        </div>
      </div>

    </>
  )
}

export default App
