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


  function hanldlelike(mts) {
    setlike(prevItems => [...prevItems, mts]);
    
  }
  // console.log(liked)
  function handleDislike(removeitem){
    setlike(prevArray => prevArray.filter(item => item !== removeitem));

  }

  // const users = data.items.map(mts => {

  //   const exists = liked.includes(mts.login);

  //   return (
  //     <GetInfo
  //       key={1}

  //       user={user}

  //       repo={allrepodata}
      
  //       liked={liked}
  //       like={hanldlelike}

  //       // isLike={exists}



  //     />
  //   )
  // })
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

          <div className="allUsers">

          <GetInfo
        key={1}

        user={user}

        repo={allrepodata}
      
        liked={liked}
        like={hanldlelike}

        // isLike={exists}



      />

          </div>
          <div className="repos">
            <ShowRepos
              repo={reooData}
            />
          </div>
          <div className="repos">

            {LikedUser}
          </div>


        </div>
      </div>

    </>
  )
}

export default App
