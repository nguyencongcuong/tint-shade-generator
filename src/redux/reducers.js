import { combineReducers } from "redux"

const colorReducer = (state = "#82B4C4", action) => {
	switch (action.type) {
		case 'GET_COLOR':
			return action.payload
		default:
			return state
	}
}

const tintsShadeReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_TINTS_AND_SHADES':
			return action.payload
		default:
			return state
	}
}

const allReducers = combineReducers({
	color: colorReducer,
	palette: tintsShadeReducer
})

export default allReducers
