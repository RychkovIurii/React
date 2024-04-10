import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero3.jpeg';

function PracticalTips(){
	return(
		<>
			<Navbar/>
			<Hero
			cName = "heroToGo"
			heroImage = {heroImage}
			title = "Practical Tips"
			text = "Practical Tips: Safety, sustainability, FAQs, navigation, and weather."
			linkClass = "hide"
			/>
		</>
	)
}

export default PracticalTips;