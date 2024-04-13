import React, { useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";
import logo from "../images/logo_visit.png";
import Weather from './Weather';

export default function Footer() {
	const { t } = useContext(LanguageContext);
	return (
		<div className='footer'>
			<div className='top'>
				<a className="footer-logo" href="/"><img src={logo} width={80} height={80} alt="logo"/>Visit Central Asia</a>
				<p>{t("footer.footerP")}</p>
				<div className='social-links'>
					<a href='/'>
						<i className='fa-brands fa-facebook-f'></i>
					</a>
					<a href='/'>
						<i className='fa-brands fa-instagram'></i>
					</a>
					<a href='/'>
						<i className='fa-brands fa-youtube'></i>
					</a>
					<a href='/'>
						<i className='fa-brands fa-whatsapp'></i>
					</a>
				</div>
			</div>

			<div className='bottom'>
				<div>
					<h4>{t("footer.contact")}</h4>
					<a href='/'>{t("footer.callUs")}</a>
					<a href='/'>{t("footer.emailUs")}</a>
					<a href='/'>{t("footer.careers")}</a>
				</div>
				<div>
					<h4>{t("footer.about")}</h4>
					<a href='/'>{t("footer.aboutUs")}</a>
					<a href='/'>{t("footer.staff")}</a>
					<a href='/'>{t("footer.partners")}</a>
				</div>
				<div>
					<h4>{t("footer.others")}</h4>
					<a href='/'>{t("footer.privacy")}</a>
					<a href='/'>{t("footer.license")}</a>
					<a href='/'>{t("footer.terms")}</a>
				</div>
				<Weather/>
			</div>
		</div>
	)
}
