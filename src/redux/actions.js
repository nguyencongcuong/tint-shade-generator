export const getColor = (payload) => {
	return {
		type: 'GET_COLOR',
		payload
	}
}

export const setTintsAndShades = (payload) => {
	return {
		type: 'SET_TINTS_AND_SHADES',
		payload
	}
}
