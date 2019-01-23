import {BOT_ANSWERS} from '../actions/bot'

const initialState = {
	answers: []
}

function botReducer(state = initialState, action) {
	switch(action.type) {
		case BOT_ANSWERS:
			return {...state, answers: state.answers.concat(action.answer)}
		default:
			return state
	}
}

export default botReducer
