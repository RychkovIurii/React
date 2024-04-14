import React, { useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";
import "./CardStyles.css";
import CardItems from './CardItems';
import cardImage6 from '../assets/stay6.jpeg';
import cardImage5 from '../assets/stay5.jpeg';
import cardImage4 from '../assets/stay4.jpeg';
import cardImage3 from '../assets/stay3.jpeg';
import cardImage2 from '../assets/stay2.jpeg';
import cardImage1 from '../assets/stay1.jpeg';

const StayCard = () => {
	const { t } = useContext(LanguageContext);
	return(
		<div className="card">
			<h1>{t("stay.H1")}</h1>
			<p>{t("stay.P")}</p>
			<div className='setOf3cards'>
				<CardItems 
				title = {t("stay.Title1")}
				text = {t("stay.Text1")}
				img = {cardImage1}
				/>
				<CardItems 
				title = {t("stay.Title2")}
				text = {t("stay.Text2")}
				img = {cardImage2}
				/>
				<CardItems 
				title = {t("stay.Title3")}
				text = {t("stay.Text3")}
				img = {cardImage3}
				/>
			</div>
			<div className='setOf3cards'>
				<CardItems 
				title = {t("stay.Title4")}
				text = {t("stay.Text4")}
				img = {cardImage4}
				/>
				<CardItems 
				title = {t("stay.Title5")}
				text = {t("stay.Text5")}
				img = {cardImage5}
				/>
				<CardItems 
				title = {t("stay.Title6")}
				text = {t("stay.Text6")}
				img = {cardImage6}
				/>
			</div>
		</div>
	)
}


export default StayCard;