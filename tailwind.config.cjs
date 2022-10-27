/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ["'Nunito Sans'", ...fontFamily.sans],
				secondary: ["'IBM Plex Serif'", ...fontFamily.serif],
				poppins: ["'Poppins'", ...fontFamily.sans],
			},
			colors: {
				primary: '#2A2A2A',
			},
		},
	},
	plugins: [],
};
