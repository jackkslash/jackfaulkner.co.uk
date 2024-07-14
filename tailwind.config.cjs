/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				blink: {
					'0%, 50%': { opacity: 1 },
					'50.01%, 100%': { opacity: 0 },
				},
			},
			animation: {
				'fade-in-down': 'fade-in-down 0.5s ease-out',
				'blink': 'blink 1s steps(1) infinite'
			}
		},
	},
	plugins: [],
	darkMode: 'class',
}
