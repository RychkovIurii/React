import React from 'react';
import './Header.css';
import logo from "../images/logo.png";

const Header = ({ setSearchValue }) => {
	return (
		<header className="header">
			<div className="header-left">
				<img src={logo} alt="Logo" className="logo" />
				<div className="site-info">
				<h1>Welcome to MovieLand</h1>
				</div>
			</div>
			<div className="header-right">
				<i class="fa-solid fa-circle-play"></i>
				<p>Online cinema</p>
				<input
				type="text"
				placeholder="Search..."
				className="search-bar"
				onChange={(event) => setSearchValue(event.target.value)}
				/>
				<button className="login-button">Login</button>
			</div>
		</header>
	);
};

export default Header;
