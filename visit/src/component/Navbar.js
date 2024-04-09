import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import "./NavbarStyles.css";
import logo from '../images/logo_visit.png';

export default class Navbar extends Component {
  render() {
	return (
		<nav className='NavbarItems'>
			<a className='navbar-logo' href="/"><img src={logo} width={100} height={100} alt="logo"/>Visit Central Asia</a>
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
