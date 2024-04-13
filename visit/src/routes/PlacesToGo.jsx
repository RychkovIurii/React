import React, { useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero8.jpeg';

function PlacesToGo(){
	const { t } = useContext(LanguageContext);
	return(
		<>
			<Navbar/>
			<Hero
			cName = "heroToGo"
			heroImage = {heroImage}
			title = {t("hero.heroPlacesToGoTitle")}
			text = {t("hero.heroPlacesToGoText")}
			linkClass = "hide"
			/>
		</>
	)
}

export default PlacesToGo;