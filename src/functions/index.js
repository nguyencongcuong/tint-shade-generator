export const generateTintShade = (color) => {
	const convert = require('color-convert') // npm install color-convert

	let tints = []
	let shades = []
	let origin = color.slice(1)

	const hsl = convert.hex.hsl(color)
	const h = hsl[0]
	const s = hsl[1]
	const l = hsl[2]

	const tint_l = (100 - l) / 5
	for (let i = 0, tint_l_value = l + tint_l; i < 4; i++, tint_l_value+=tint_l) {
		tints.push([h, s, tint_l_value])
	}

	const shade_l = l / 6
	for (let i = 0, shade_l_value = l - shade_l; i < 5; i++, shade_l_value-=shade_l) {
		shades.push([h, s, shade_l_value])
	}

	const newTints = tints.map(e => convert.hsl.hex(e)).reverse()
	const newShades = shades.map(e => convert.hsl.hex(e))

	return newTints.concat(origin).concat(newShades)
}


export const toHexPallet = (hslPalette) => {
	const convert = require('color-convert')
	return [...hslPalette].map(e => convert.hsl.hex(e))
}

export const randomHex = () => {
	const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
	const convert = require('color-convert')
	const h = random(0, 360)
	const s = random(10, 40)
	const l = random(40, 80)
	const hsl = `hsl(${h}, ${s}%, ${l}%)`
	const hex = "#".concat(convert.hsl.hex(h, s, l))
	return hex
}
