/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'mint': '#dbfff8',
			'blue': '#1fb6ff',
			'black': '#000000',
			'red': '#ff6464',
			'green': '#60e550',
			'gray-dark': '#273444',
			'white': '#ecfeff',
			'yellow': '#f8fe85',
			'footer': '#656564',
			'gray-light': '#c4f0c5',
		},
		fontFamily: {
			Kaldera: ['Kaldera', 'sans-serif'],
			GT_Flexa: ['GT-Flexa', 'sans-serif'],
			PPNeueMontreal: ['PPNeueMontreal', 'sans-serif'],
			sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
		}
	},
	plugins: [],
}
