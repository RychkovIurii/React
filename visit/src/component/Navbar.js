import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import "./NavbarStyles.css";

export default class Navbar extends Component {
  render() {
	return (
		<nav className='NavbarItems'>
			<h1 className='navbar-logo'>Visit Central Asia</h1>
			<ul className='nav-menu'>
				{MenuItems.map((item, index) => {
					return(
						<li key={index}>
							<a className={item.cName} href={item.url}>
							<i className={item.icon}></i>
							{item.title}
							</a>
						</li>
					)
				})}
			</ul>
			<a href="./language"><i className="fa-solid fa-globe"></i>EN</a>
		</nav>
	)
  }
}
