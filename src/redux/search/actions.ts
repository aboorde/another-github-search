import { getResults, getResultsFailure, getResultsSuccess } from './reducers'
import queryString from 'query-string'

const transformParams = (params: any) => {
	if (!params.language) return queryString.stringify(params)

	const languageString =
		typeof params.language === 'string'
			? `+language:${params.language}`
			: params.language.reduce((acc: string, curr: string) => {
					return `${acc}+language:${curr}`
			  }, '')

	const queryParam = `&q=${params.q}`
	let newParams = params
	delete newParams.q
	delete newParams.language
	return `${queryString.stringify(newParams)}${queryParam}${languageString}`
}

export const fetchResults = (queryParams?: any) => {
	return async (dispatch: any) => {
		dispatch(getResults({ ...queryParams }))

		const transformedParams = transformParams(queryParams)

		try {
			const response = await fetch(
				`https://api.github.com/search/repositories?${transformedParams}`
			)
			const data = await response.json()
			console.log('search action results: ', data)
			dispatch(getResultsSuccess(data))
		} catch (error) {
			dispatch(getResultsFailure())
		}
	}
}
