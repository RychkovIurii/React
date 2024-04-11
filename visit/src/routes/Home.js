import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero1.jpeg';
import Destination from '../components/Destination';
import Footer from '../components/Footer';


function Home(){
	return(
		<>
			<Navbar/>
			<Hero
			cName = "hero"
			heroImage = {heroImage}
			title = "Your Journey Your Silk Road"
			text = "Choose Your Favorite Destination"
			linkText = "Travel Plan"
			linkClass = "show"
			url = "/"
			/>
			<Destination/>
			<Footer/>
		</>
	)
}

export default Home;