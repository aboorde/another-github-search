import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
	name: 'search',
	initialState: {
		query: { q: '' },
		loading: false,
		results: {
			totalCount: 0,
			items: [],
		},
		hasErrors: false,
	},
	reducers: {
		getResults: (state, action) => {
			state.query = action.payload
			state.loading = true
			state.hasErrors = false
		},
		getResultsSuccess: (state, action) => {
			state.results = action.payload
			state.loading = false
			state.hasErrors = false
		},
		getResultsFailure: (state) => {
			state.loading = false
			state.hasErrors = true
		},
	},
})

// Action creators are generated for each case reducer function
export const { getResults, getResultsFailure, getResultsSuccess } =
	searchSlice.actions

export default searchSlice.reducer
