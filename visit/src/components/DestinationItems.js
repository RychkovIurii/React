import React, { Component } from 'react'
import "./DestinationStyles.css";

export default class DestinationItems extends Component {
  render() {
	return (
		<div className={this.props.cNameDest}>
			<div className="dest-text">
				<h2>{this.props.title}</h2>
				<p>
					{this.props.text}
				</p>
			</div>
			<div className="image-dest">
				<img alt="img" src={this.props.img1}/>
				<img alt="img" src={this.props.img2}/>
			</div>
		</div>
	)
  }
}





/* export const DestinationItems = [
	{
		destTitle: "Almaty",
		cNameImg: "image-dest",
		cNameText: "dest-text",
		cNameDest: "first-dest",
		destText: "Discover Almaty, the vibrant heart of Kazakhstan, where modern urban charm meets the wild beauty of nature. Nestled at the foot of the majestic Tien Shan mountains, Almaty is a city that captivates with its unique blend of history, culture, and breathtaking landscapes. From the tranquil greenery of Panfilov Park to the bustling streets of the city center, Almaty offers an array of experiences. Indulge in the local cuisine, explore ancient markets, or take a cable car ride to Kok-Tobe Hill for panoramic views that will leave you spellbound. Whether you're an adventure seeker or a culture enthusiast, Almaty promises unforgettable moments and discoveries at every turn. Plan your journey to Almaty today and embark on an adventure where the spirit of Kazakhstan comes to life.",
		url: "/"
	},
	{
		destTitle: "Ala-kul",
		cNameImg: "image-dest",
		cNameText: "dest-text",
		cNameDest: "first-dest-reverse",
		destText: "Discover Almaty, the vibrant heart of Kazakhstan, where modern urban charm meets the wild beauty of nature. Nestled at the foot of the majestic Tien Shan mountains, Almaty is a city that captivates with its unique blend of history, culture, and breathtaking landscapes. From the tranquil greenery of Panfilov Park to the bustling streets of the city center, Almaty offers an array of experiences. Indulge in the local cuisine, explore ancient markets, or take a cable car ride to Kok-Tobe Hill for panoramic views that will leave you spellbound. Whether you're an adventure seeker or a culture enthusiast, Almaty promises unforgettable moments and discoveries at every turn. Plan your journey to Almaty today and embark on an adventure where the spirit of Kazakhstan comes to life.",
		url: "/"
	},
	{
		destTitle: "Silk Road",
		url: "/",
		cNameImg: "image-dest",
		cNameText: "dest-text",
		cNameDest: "first-dest"
	},
	{
		destTitle: "Issyk Kul",
		url: "/",
		cNameImg: "image-dest",
		cNameText: "dest-text",
		cNameDest: "first-dest"
	}
] */