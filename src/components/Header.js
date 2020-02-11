import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1><Link to='/'>Some notions</Link></h1>
            <p>Personal blog built with React and the WordPress API</p>
        </header>
    )
}

export default Header