import type { Config } from 'tailwindcss';

export default {
	content: [
		'./app/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}'
	],
	theme: {
		extend: {
			colors: {
				// SAP-inspired blues and neutrals
				primary: {
					DEFAULT: '#0a6ed1',
					foreground: '#ffffff',
					dark: '#0854a0',
					light: '#cfe5ff'
				},
				surface: {
					DEFAULT: '#f5f7fa',
					alt: '#eef2f7'
				},
				accent: '#1a9898'
			},
			boxShadow: {
				card: '0 1px 2px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.06)'
			},
			borderRadius: {
				xl: '14px'
			}
		}
	},
	plugins: []
} satisfies Config;

