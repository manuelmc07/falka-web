/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'diagramm': ['Inter', 'system-ui', 'sans-serif'],
				'diagramm-bold': ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				'falka': {
					blue: '#0066CC',
					'light-blue': '#4D9AE7',
					orange: '#FF6B35',
					yellow: '#FFD23F',
					green: '#4CAF50',
					purple: '#9C27B0',
					red: '#F44336',
				}
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.6s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				}
			}
		},
	},
	plugins: [],
} 