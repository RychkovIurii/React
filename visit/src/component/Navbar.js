import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";
import logo from "../images/logo_visit.png";

export default class Navbar extends Component {
	state = { clicked: false };
	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	}
	render() {
		return (
			<nav className="NavbarItems">
				<a className="navbar-logo" href="/"><img src={logo} width={100} height={100} alt="logo"/>Visit Central Asia</a>
				<div className="menu-icons" onClick={this.handleClick}>
					{/* <i className="fa-solid fa-bars"></i>
					<i className="fas fa-times"></i> */}
					<i className={this.state.clicked ? "fas fa-times" : "fa-solid fa-bars"}></i>
				</div>
				<ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
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
					<li><a href="./language"><i className="fa-solid fa-globe"></i>EN</a></li>
				</ul>
				
			</nav>
		)
	}
}
