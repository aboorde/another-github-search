import { Grid } from '@material-ui/core'
import queryString from 'query-string'
import { useSelector } from 'react-redux'
import { getSearchResults, getQuery } from '../../redux/search/selectors'
import { SortDropdown } from '../../components/SortDropdown/SortDropdown'
import { Loader } from './Loader'
import { LanguageFilter } from '../../components/LanguageFilter/LanguageFilter'
import { ResultsCard } from '../../components/ResultsCard/ResultsCard'
import { useResults } from './useResults'

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
			<Grid container>
				<Grid item xs={12} md={6}>
					<LanguageFilter />
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					container
					direction='column'
					justify='flex-end'
				>
					<SortDropdown />
				</Grid>
			</Grid>
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
