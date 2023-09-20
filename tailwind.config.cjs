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
			'white': '#ffffff',
			'yellow': '#f8fe85',
			'footer': '#656564',
			'gray-light': '#818180',
		},
		fontFamily: {
			Quicksand_B: ['Quicksand-Bold', 'sans-serif'],
			Quicksand_L: ['Quicksand-Light', 'sans-serif'],
			Belleza: ['Belleza', 'sans-serif'],
			Lora_Reg: ['Lora-Regular', 'sans-serif'],
			Lora_B: ['Lora-Bold', 'sans-serif'],
			sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
		}
	},
	plugins: [],
}
