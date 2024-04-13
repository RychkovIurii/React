import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero11.jpeg';

function ThingsToDo(){
	return(
		<>
			<Navbar/>
			<Hero
			cName = "heroToGo"
			heroImage = {heroImage}
			title = "Things to do"
			text = "Enjoy Central Asia: Nature retreats to city festivals."
			linkClass = "hide"
			/>
		</>
	)
}

export default ThingsToDo;