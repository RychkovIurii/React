import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero4.jpeg';

function PlacesToStay(){
	return(
		<>
			<Navbar/>
			<Hero
			cName = "heroToStay"
			heroImage = {heroImage}
			title = "Places to stay"
			text = "Explore Central Asia's unique stays: yurts, nomad homes, or luxury options"
			linkClass = "hide"
			/>
		</>
	)
}

export default PlacesToStay;