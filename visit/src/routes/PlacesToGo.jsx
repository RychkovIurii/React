import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero8.jpeg';

function PlacesToGo(){
	return(
		<>
			<Navbar/>
			<Hero
			cName = "heroToGo"
			heroImage = {heroImage}
			title = "Places to go"
			text = "Discover Central Asia: From ancient cities to stunning landscapes"
			linkClass = "hide"
			/>
		</>
	)
}

export default PlacesToGo;