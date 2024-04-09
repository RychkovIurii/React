import React from 'react';
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  return (
	<div>
		<div className="logo">
                <a href="#">
				<img src={logo} alt="Logo" />
                </a>
            </div>
            <ul>
                <li><a href="#"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></a></li>
                <li><a href="#"><FontAwesomeIcon icon="fa-solid fa-campground" />Nomad Yurts</a></li>
                <li><a href="#"><FontAwesomeIcon icon="fa-solid fa-person-hiking" />Trekking</a></li>
                <li><a href="#"><FontAwesomeIcon icon="fa-solid fa-mountain" />Hiking</a></li>
                <li><a href="#"><FontAwesomeIcon icon="fa-solid fa-calendar" />EVENTS</a></li>
                <li><a id="nav-toggle" href="#"><FontAwesomeIcon icon="fa-solid fa-bars" />MENU</a></li>
            </ul>
	</div>
  )
}
