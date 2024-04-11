import "./DestinationStyles.css";
import DestinationItems from './DestinationItems';
import destImage1 from '../assets/dest2.jpeg';
import destImage2 from '../assets/dest1.jpeg';

const Destination = () => {
	return(
		<div className="destination">
			<h1>Popular Destinations</h1>
			<p>Urban getaway or nature retreat? Find your perfect destination here.</p>

			<DestinationItems 
			title = "Almaty"
			text = "Discover Almaty, the vibrant heart of Kazakhstan, where modern urban charm meets the wild beauty of nature. Nestled at the foot of the majestic Tien Shan mountains, Almaty is a city that captivates with its unique blend of history, culture, and breathtaking landscapes. From the tranquil greenery of Panfilov Park to the bustling streets of the city center, Almaty offers an array of experiences. Indulge in the local cuisine, explore ancient markets, or take a cable car ride to Kok-Tobe Hill for panoramic views that will leave you spellbound. Whether you're an adventure seeker or a culture enthusiast, Almaty promises unforgettable moments and discoveries at every turn. Plan your journey to Almaty today and embark on an adventure where the spirit of Kazakhstan comes to life."
			img1 = {destImage1}
			img2 = {destImage2}
			/>
		</div>
	)
}

export default Destination;