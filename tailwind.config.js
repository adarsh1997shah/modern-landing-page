/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#11b2a8',
			},
			fontFamily: {
				Neue: ['Neue Haas Unica'],
			},
		},
	},
	plugins: [],
};
