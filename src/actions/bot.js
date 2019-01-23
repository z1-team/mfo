import api from '../api'

export const BOT_ANSWERS = 'BOT_ANSWERS'

export const answerBot = (answer) => ({type: BOT_ANSWERS, answer})
