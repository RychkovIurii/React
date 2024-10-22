import React from 'react';
import './Footer.css';
import logo from "../images/logo.png";

const Footer = () => {
	return (
		<footer className="footer">
		<div className="top">
			<div className="footer-logo">
			<img src={logo} width={100} height={100} alt="Logo" />
			<span>My Movie App</span>
			</div>
			<div className="social-media">
			<a href='/'><i className='fab fa-facebook-f'></i></a>
			<a href='/'><i className='fab fa-instagram'></i></a>
			<a href='/'><i className='fab fa-youtube'></i></a>
			<a href='/'><i className='fab fa-whatsapp'></i></a>
			</div>
		</div>
		<div className="bottom">
			<div>
			<h4>Contact</h4>
			<ul>
				<li>Call us</li>
				<li>Email us</li>
			</ul>
			</div>
			<div>
			<h4>About</h4>
			<ul>
				<li>About us</li>
				<li>Careers</li>
				<li>Staff</li>
				<li>Our Partners</li>
			</ul>
			</div>
			<div>
			<h4>Others</h4>
			<ul>
				<li>Privacy Policy</li>
				<li>License</li>
				<li>Terms of use</li>
			</ul>
			</div>
		</div>
		<p>© 2024 Created by irychkov. All rights reserved.</p>
		</footer>
	);
};

export default Footer;

