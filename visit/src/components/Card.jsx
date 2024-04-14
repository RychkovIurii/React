import React, { useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";
import "./CardStyles.css";
import CardItems from './CardItems';
import cardImage6 from '../assets/card6.jpeg';
import cardImage5 from '../assets/card5.jpeg';
import cardImage4 from '../assets/card4.jpeg';
import cardImage3 from '../assets/card3.jpeg';
import cardImage2 from '../assets/card2.jpg';
import cardImage1 from '../assets/card1.jpeg';

const Card = () => {
	const { t } = useContext(LanguageContext);
	return(
		<div className="card">
			<h1>{t("card.H1")}</h1>
			<p>{t("card.P")}</p>
			<div className='setOf3cards'>
				<CardItems 
				title = {t("card.Title1")}
				text = {t("card.Text1")}
				img = {cardImage1}
				/>
				<CardItems 
				title = {t("card.Title2")}
				text = {t("card.Text2")}
				img = {cardImage2}
				/>
				<CardItems 
				title = {t("card.Title3")}
				text = {t("card.Text3")}
				img = {cardImage3}
				/>
			</div>
			<div className='setOf3cards'>
				<CardItems 
				title = {t("card.Title4")}
				text = {t("card.Text4")}
				img = {cardImage4}
				/>
				<CardItems 
				title = {t("card.Title5")}
				text = {t("card.Text5")}
				img = {cardImage5}
				/>
				<CardItems 
				title = {t("card.Title6")}
				text = {t("card.Text6")}
				img = {cardImage6}
				/>
			</div>
		</div>
	)
}


export default Card;