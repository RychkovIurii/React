import { useState, useEffect, useRef, useCallback } from 'react';

const getLanguageFile = async ({ language }) => {
	const module = await import(`../languages/${language}/strings.json`);
	return module.default;
};

const setInitialLanguage = () => {
	const initialLang = localStorage.getItem("currentLang");
	if (!initialLang) {
		localStorage.setItem("currentLang", "en");
		return "en";
	} else {
		return initialLang;
	}
};

export default function useTranslation() {
	const [{ language, strings }, setLanguage] = useState({
		language: setInitialLanguage(),
		strings: {}
	});

	const isJsonFetched = useRef(false);

	const updateLanguage = useCallback(async (newLanguage) => {
		if (isJsonFetched.current && newLanguage === language) {
			return;
		}
		const fetchedStrings = await getLanguageFile({ language: newLanguage });
		isJsonFetched.current = true;
		setLanguage({
			language: newLanguage,
			strings: fetchedStrings
		});
		localStorage.setItem("currentLang", newLanguage);
	}, [language]);

	const t = (translation) => {
		var keys = translation.split(".");
		var result = strings;
		for (let i = 0; i < keys.length; i++) {
			result = result[keys[i]];
			if (!result) break;
		};
		return result || translation;
	};

	useEffect(() => {
		updateLanguage(language);
	}, [language, updateLanguage]);

	return { t, language, updateLanguage };
}
