// import image from "../images/troll-face.png"
import PropTypes from "prop-types"
import React from "react"
import { useState,useEffect } from "react"
export default function UserInput(props) {

    const [input, setInput] = React.useState("")
    // const [input, setInput] = React.useState("")

    function handleChange(event) {
        const input_text = event.target.value
        setInput(input_text)
         console.log(input)
    }
    function mts(){
      props.username(input)
    }

    // useEffect(()=>{
    //     async function mts(){
    //         // console.log("sdf")
    //         // const res=await  fetch("https://api.github.com/users/MTS9992")
    //         // const res=await  fetch("https://api.github.com/users/MTS999/repos")
    //         const res=await  fetch(`https://api.github.com/users/${username}`)
    //         const data=await res.json()
    //         console.log(data)
    //         console.log(data.name)
    //         console.log(data.avatar_url)
    //         console.log(data.followers)
    //         console.log(data.following)
    //         console.log(data.public_repos)


    //     }
    //     mts()
    // },)

    return (
        <nav className="header">
            <input
                type="text"
                placeholder="enter username"
                className="user-input"
                onChange={ handleChange}

            />
            <button className="btn" onClick={mts}>Search</button>
        </nav>
    )
}
UserInput.propTypes = {
    username: PropTypes.func.isRequired
}