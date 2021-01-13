import React from "react"
import {Link} from "react-router-dom"

const Header = (props) => {
    return (
        <header>
            <Link to="/"><p>Home</p></Link>
            <Link to="/about">About</Link>
        </header>
    )
}

export default Header