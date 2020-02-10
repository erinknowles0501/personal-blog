import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1><Link to='/'>Some notions</Link></h1>
            <p>The personal blog of Erin Knowles.<br />
            Looking for <a href="erinknowles.com">her portfolio?</a></p>
        </header>
    )
}

export default Header