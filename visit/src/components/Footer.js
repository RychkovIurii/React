import React from 'react'
import logo from "../images/logo_visit.png";
import Weather from './Weather';

export default function Footer() {
  return (
	<div className='footer'>
		<div className='top'>
			<a className="footer-logo" href="/"><img src={logo} width={80} height={80} alt="logo"/>Visit Central Asia</a>
			<p>© 2024 Created by irychkov. All rights reserved.</p>
			<div className='social-links'>
				<a href='/'>
					<i className='fa-brands fa-facebook-f'></i>
				</a>
				<a href='/'>
					<i className='fa-brands fa-instagram'></i>
				</a>
				<a href='/'>
					<i className='fa-brands fa-youtube'></i>
				</a>
				<a href='/'>
					<i className='fa-brands fa-whatsapp'></i>
				</a>
			</div>
		</div>

		<div className='bottom'>
			<div>
				<h4>Contact</h4>
				<a href='/'>Call us</a>
				<a href='/'>Email us</a>
				<a href='/'>Careers</a>
			</div>
			<div>
				<h4>About</h4>
				<a href='/'>About us</a>
				<a href='/'>Staff</a>
				<a href='/'>Website terms</a>
			</div>
			<div>
				<h4>Others</h4>
				<a href='/'>Privacy Policy</a>
				<a href='/'>License</a>
				<a href='/'>Terms of use</a>
			</div>
			<Weather/>
		</div>
	</div>
  )
}
