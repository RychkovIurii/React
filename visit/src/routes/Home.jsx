import React, { useContext } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero1.jpeg';
import Destination from '../components/Destination';
import Footer from '../components/Footer';
import { LanguageContext } from "../context/LanguageContext";


function Home(){
	const { t } = useContext(LanguageContext);
	return(
		<>
			<Navbar/>
			<Hero
			cName = "hero"
			heroImage = {heroImage}
			title = {t("hero.heroHomeTitle")}
			text = {t("hero.heroHomeText")}
			linkText = {t("hero.heroHomeLinkText")}
			linkClass = "show"
			url = "/"
			/>
			<Destination/>
			<Footer/>
		</>
	)
}

export default Home;