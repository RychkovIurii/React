import "./DestinationStyles.css";
import DestinationItems from './DestinationItems';
import destImage6 from '../assets/dest6.jpeg';
import destImage5 from '../assets/dest5.jpeg';
import destImage4 from '../assets/dest4.jpeg';
import destImage3 from '../assets/dest3.jpeg';
import destImage1 from '../assets/dest2.jpeg';
import destImage2 from '../assets/dest1.jpeg';

const Destination = () => {
	return(
		<div className="destination">
			<h1>Popular Destinations</h1>
			<p>Urban getaway or nature retreat? Find your perfect destination here.</p>

			<DestinationItems 
			title = "Almaty, Kazakhstan"
			text = "Discover Almaty, the vibrant heart of Kazakhstan, where modern urban charm meets the wild beauty of nature. Nestled at the foot of the majestic Tien Shan mountains, Almaty is a city that captivates with its unique blend of history, culture, and breathtaking landscapes. From the tranquil greenery of Panfilov Park to the bustling streets of the city center, Almaty offers an array of experiences. Indulge in the local cuisine, explore ancient markets, or take a cable car ride to Kok-Tobe Hill for panoramic views that will leave you spellbound. Whether you're an adventure seeker or a culture enthusiast, Almaty promises unforgettable moments and discoveries at every turn. Plan your journey to Almaty today and embark on an adventure where the spirit of Kazakhstan comes to life."
			img1 = {destImage1}
			img2 = {destImage2}
			cNameDest = "first-dest"
			/>
			<DestinationItems 
			title = "Ala-Kul Lake, Kyrgyzstan"
			text = "Embark on a journey to Ala-Kul Lake, Kyrgyzstan's hidden gem nestled high in the Tien Shan Mountains. This stunning turquoise lake, set at an altitude of over 3,500 meters, offers a serene escape into nature's embrace. Surrounded by rugged peaks and lush meadows, Ala-Kul is a paradise for hikers and outdoor enthusiasts. The trek to the lake challenges and rewards with its breathtaking landscapes, from roaring rivers to sweeping alpine vistas. Camping by its crystal-clear waters under a starlit sky, you'll find peace and a deep connection with nature. Ala-Kul Lake isn't just a destination; it's an unforgettable experience that showcases the pristine beauty of Kyrgyzstan. Prepare for an adventure that will take you through some of the most spectacular scenery Central Asia has to offer."
			img1 = {destImage3}
			img2 = {destImage4}
			cNameDest = "first-dest-reverse"
			/>
			<DestinationItems 
			title = "Silk Road: Kyrgyzstan, Kazakhstan, Uzbekistan"
			text = "Set off on a grand voyage along the Silk Road, where the vibrant cities of Bishkek, Almaty, Tashkent, and Samarkand await to unfold their tales. This legendary route, steeped in history, offers a mosaic of cultures, architecture, and traditions. Begin in Bishkek, Kyrgyzstan's capital, where the charm of Soviet-era architecture blends with modernity. Continue to Almaty, Kazakhstan's cultural heart, nestled against the majestic backdrop of the Tien Shan mountains. Tashkent, Uzbekistan's capital, will enchant you with its mix of modern buildings and ancient Islamic architecture. The journey culminates in Samarkand, a city that captures the essence of the Silk Road with its awe-inspiring monuments and bustling bazaars. Each stop is a chapter in a journey through time, offering a glimpse into the lives of the traders, scholars, and conquerors who once traveled this route. The Silk Road is more than a journey; it's an experience that bridges continents, cultures, and centuries."
			img1 = {destImage5}
			img2 = {destImage6}
			cNameDest = "first-dest"
			/>
		</div>
	)
}

export default Destination;