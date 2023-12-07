// import image from "../images/troll-face.png"
import PropTypes from "prop-types"
import React from "react"
export default function UserInput(props) {

    const [input, setInput] = React.useState("")
    // const [input, setInput] = React.useState("")

    function handleChange(event) {
        const input_text = event.target.value
        setInput(input_text)
    }
    function mts(){
      props.username(input)
    }


    return (
        <nav className="input">
            <input
                type="text"
                placeholder="enter username"
                className="user-input"
                onChange={ handleChange}

            />
            <button className="serch-btn" onClick={mts}>Search</button>
        </nav>
    )
}
UserInput.propTypes = {
    username: PropTypes.func.isRequired
}