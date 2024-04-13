import React, { useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";
import "./DestinationStyles.css";
import DestinationItems from './DestinationItems';
import destImage6 from '../assets/dest6.jpeg';
import destImage5 from '../assets/dest5.jpeg';
import destImage4 from '../assets/dest4.jpeg';
import destImage3 from '../assets/dest3.jpeg';
import destImage1 from '../assets/dest2.jpeg';
import destImage2 from '../assets/dest1.jpeg';

const Destination = () => {
	const { t } = useContext(LanguageContext);
	return(
		<div className="destination">
			<h1>{t("destination.destH1")}</h1>
			<p>{t("destination.destP")}</p>

			<DestinationItems 
			title = {t("destination.destTitle1")}
			text = {t("destination.destText1")}
			img1 = {destImage1}
			img2 = {destImage2}
			cNameDest = "first-dest"
			/>
			<DestinationItems 
			title = {t("destination.destTitle2")}
			text = {t("destination.destText2")}
			img1 = {destImage3}
			img2 = {destImage4}
			cNameDest = "first-dest-reverse"
			/>
			<DestinationItems 
			title = {t("destination.destTitle3")}
			text = {t("destination.destText3")}
			img1 = {destImage5}
			img2 = {destImage6}
			cNameDest = "first-dest"
			/>
		</div>
	)
}

export default Destination;