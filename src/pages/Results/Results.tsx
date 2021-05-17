import { Grid } from '@material-ui/core'
import { useEffect } from 'react'
import queryString from 'query-string'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { fetchResults } from '../../redux/search/actions'
import {
	getSearchResults,
	getQuery,
	getIsLoading,
} from '../../redux/search/selectors'
import { SortDropdown } from '../../components/SortDropdown/SortDropdown'
import { Loader } from './Loader'
import { LanguageFilter } from '../../components/LanguageFilter/LanguageFilter'
import { ResultsCard } from '../../components/ResultsCard/ResultsCard'

export const useResults = () => {
	const location = useLocation()
	const history = useHistory()
	const dispatch = useDispatch()
	const parsedQueryParams = queryString.parse(location.search)
	const isLoading = useSelector(getIsLoading)

	useEffect(() => {
		if (!parsedQueryParams.q) {
			history.push('/')
		} else if (!isLoading) {
			dispatch(fetchResults(parsedQueryParams))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return { parsedQueryParams, isLoading }
}

export const Results = () => {
	const { parsedQueryParams, isLoading } = useResults()
	const results = useSelector(getSearchResults)
	const query = useSelector(getQuery)

	if (isLoading) {
		return <Loader />
	}

	if (!results || results === []) {
		return <div>No Results Found</div>
	}

	return (
		<>
			<div>{`Showing results for: ${query.q}`}</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'flex-end',
					marginBottom: '10px',
				}}
			>
				<LanguageFilter />
				<SortDropdown />
			</div>
			<Grid container spacing={2} alignItems='center'>
				{results.map((result: any) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={result.id}>
						<ResultsCard
							result={result}
							linkPath={`/details?id=${result.id}&${queryString.stringify(
								parsedQueryParams
							)}`}
						/>
					</Grid>
				))}
			</Grid>
		</>
	)
}
