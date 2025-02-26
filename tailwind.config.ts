import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		// theme:{
		// 	container: {
		// 		center: true,
		// 	  },
		// },
		keyframes: {
			blink: {
			  "0%, 100%": { opacity: "1" },
			  "50%": { opacity: "0" },
			},
		  },
		  animation: {
			blink: "blink 900ms infinite",
		  },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			terminal: {
  				DEFAULT: '#474040',
  				window: '#1b1d30',
  				header: '#635c82',
  				key: '#e7d184'
  			},
  			accent: {
  				DEFAULT: '#0cc0df',
  				hover: '#1d4ed8',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			mono: [
				"Courier",
				"SF Mono",
				"Fira Code",
				"JetBrains Mono",
				"Cascadia Code",
				"Source Code Pro",
				"Inconsolata",
				"IBM Plex Mono",
				"Menlo",
				"Monaco",
				"monospace",
			  ],
			
		},
  	}
  },
  plugins: [require("tailwindcss-animate"),require('tailwind-scrollbar')],
} satisfies Config;
