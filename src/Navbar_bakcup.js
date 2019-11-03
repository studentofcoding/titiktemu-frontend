import React from 'react'

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo-container">
              <img
                className="app-logo"
                src="Images/logo.png"
                alt="titiktumbuh"
              />
      </div>
			<ul className="right">
				<li><a href="/">Home</a></li>
				<li><a href="/About">About</a></li>
				<li><a href="/Contact">Contact</a></li>
			</ul>
		</div>
	)
}

export default Navbar;