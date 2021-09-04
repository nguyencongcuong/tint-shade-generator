module.exports = {
	purge: [
	'./src/**/*.{js,jsx,ts,tsx}',
	'./public/index.html'
	],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			colors: {
				min: {
					0: "#F8F8F8",
					1: "#F2F2F2",
					2: "#EBEBEB",
					3: "#E4E4E4",
					4: "#DEDEDE",
					5: "#B9B9B9",
					6: "#949494",
					7: "#6F6F6F",
					8: "#4A4A4A",
					9: "#252525"
				}
      }
		},
  },
  variants: {
    extend: {},
  },
  plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
}
