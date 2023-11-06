import React from 'react'

function Navbar() {
    return (

        /* Navbardesign */
        <div>

            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">Shey Rooms</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="/register#">Register</a>
                        <a class="nav-item nav-link" href="/login">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
