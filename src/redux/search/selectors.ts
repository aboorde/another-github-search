import { createSelector } from 'reselect'

const getSearch = createSelector(
	(state) => state,
	(state: any) => state.search
)

const getResults = createSelector(getSearch, (search) => search.results)

export const getSearchResults = createSelector(
	getResults,
	(results) => results.items
)

export const getResultById = (id: any) => {
	return createSelector(getSearchResults, (results) =>
		results.find((result: any) => result.id.toString() === id.toString())
	)
}

export const getQuery = createSelector(
	getSearch,
	(searchState) => searchState.query
)

export const getIsLoading = createSelector(
	getSearch,
	(searchState) => searchState.loading
)
