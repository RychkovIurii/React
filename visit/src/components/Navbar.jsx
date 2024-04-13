import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";
import logo from "../images/logo_visit.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	state = { clicked: false, isScrolled: false };

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		if (window.scrollY > 0) {
			this.setState({ isScrolled: true });
		} else {
			this.setState({ isScrolled: false });
		}
	}
	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	}
	render() {
		const { clicked, isScrolled } = this.state;
		return (
			<nav className={`NavbarItems ${isScrolled ? 'scrolled' : ''}`}>
				<a className="navbar-logo" href="/"><img src={logo} width={100} height={100} alt="logo"/>Visit Central Asia</a>
				<div className="menu-icons" onClick={this.handleClick}>
					{/* <i className="fa-solid fa-bars"></i>
					<i className="fas fa-times"></i> */}
					<i className={clicked ? "fas fa-times" : "fa-solid fa-bars"}></i>
				</div>
				<ul className={clicked ? "nav-menu active" : "nav-menu"}>
					{MenuItems.map((item, index) => {
						return(
							<li key={index}>
								<Link className={item.cName} to={item.url}>
								{item.title}
								<i className={item.icon}></i>
								</Link>
							</li>
						)
					})}
					<li><a href="./language"><i className="fa-solid fa-globe"></i>EN</a></li>
				</ul>
				
			</nav>
		)
	}
}
