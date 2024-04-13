import React, { useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero4.jpeg';

function PlacesToStay(){
	const { t } = useContext(LanguageContext);
	return(
		<>
			<Navbar/>
			<Hero
			cName = "heroToStay"
			heroImage = {heroImage}
			title = {t("hero.heroPlacesToStayTitle")}
			text = {t("hero.heroPlacesToStayText")}
			linkClass = "hide"
			/>
		</>
	)
}

export default PlacesToStay;