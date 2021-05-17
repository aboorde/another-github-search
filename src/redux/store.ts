import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './search/reducers'

export const store = configureStore({
	reducer: {
		search: searchReducer,
	},
})
