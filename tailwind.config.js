/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,html}'],
	theme: {
		fontSize: {
			xs: ['.8125rem', '1.2188rem'], // 13px - 19.5px
			sm: ['1rem', '1.5rem'], // 16px - 24px
			md: ['1.25rem', '1.875rem'], // 20px - 30px
			lg: ['1.5625rem', '2.0313rem'], // 25px - 32.5px
			xl: ['1.9375rem', '2.325rem'], // 31px - 37.2px
			'2xl': ['2.4375rem', '2.925rem'], // 39px - 46.8px
			'3xl': ['3.0625rem', '3.675rem'], // 49px 58.8px
			'4xl': ['3.8125rem', '4.575rem'], // 61px - 73.2px
			'5xl': ['4.75rem', '5.7rem'], // 76px - 91.2px
		},
		extend: {
			colors: {
				black: '#070705',
				white: '#fff',
				brand: {
					green: '#03FA6E',
					yellow: '#FFC200',
					red: '#BF3401',
				},
			},
		},
	},
	plugins: [],
	future: {
		hoverOnlyWhenSupported: true,
	},
};
