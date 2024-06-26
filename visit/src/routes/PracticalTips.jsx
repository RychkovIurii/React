import React, { useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero3.jpeg';
import Footer from '../components/Footer';

function PracticalTips(){
	const { t } = useContext(LanguageContext);
	return(
		<>
			<Navbar/>
			<Hero
			cName = "heroToGo"
			heroImage = {heroImage}
			title = {t("hero.heroPracticalTipsTitle")}
			text = {t("hero.heroPracticalTipsText")}
			linkClass = "hide"
			/>
			<Footer/>
		</>
	)
}

export default PracticalTips;