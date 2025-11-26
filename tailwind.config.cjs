/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#14B8A6',
				'primary-dark': '#0D9488',
				'secondary': '#8B5CF6',
				'accent': '#A78BFA',
				'bg-warm': '#FFFFFE',
				'surface': '#FAFAFA',
				'text-primary': '#1E293B',
				'text-secondary': '#475569',
				'text-muted': '#94A3B8',
				'border-warm': '#E2E8F0',
			},
			fontFamily: {
				'heading': ['"Source Serif 4"', 'Georgia', 'serif'],
				'body': ['Inter', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				'warm': '0 4px 20px -2px rgba(196, 112, 90, 0.15)',
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				warm: {
					"primary": "#14B8A6",
					"secondary": "#8B5CF6",
					"accent": "#A78BFA",
					"neutral": "#1E293B",
					"base-100": "#FFFFFE",
					"base-200": "#FAFAFA",
					"base-300": "#E2E8F0",
				},
			},
		],
		darkTheme: false,
		logs: false,
	}
}
