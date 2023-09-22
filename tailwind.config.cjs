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
			Quicksand_B: ['Quicksand-Bold', ...defaultTheme.fontFamily.sans],
			Quicksand_L: ['Quicksand-Light', ...defaultTheme.fontFamily.sans],
			Belleza: ['Belleza', ...defaultTheme.fontFamily.sans],
			Lora_Reg: ['Lora-Regular', ...defaultTheme.fontFamily.sans],
			Lora_B: ['Lora-Bold', ...defaultTheme.fontFamily.sans],
			sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
		},
		fontSize: {
			xs: '10px',
			sm: '0.9rem',
			base: '1rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
			'6xl': '4.052rem',
		},
		screens: {
			'xs': '275px',
			'sm': '350px',
			'md': '760px',
			'lg': '1024px',
		},
	},
	plugins: [],
}
