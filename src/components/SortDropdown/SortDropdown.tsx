import { MenuItem, Select, Typography } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { fetchResults } from '../../redux/search/actions'
import { getQuery } from '../../redux/search/selectors'
import queryString from 'query-string'

export const SortDropdown = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const location = useLocation()
	const parsed = queryString.parse(location.search)
	const query = useSelector(getQuery)
	const [sortValue, setSortValue] = useState(query.sort || 'best-match')
	const handleSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setSortValue(event.target.value as string)
		let newParams
		if (event.target.value === 'stars') {
			newParams = {
				...parsed,
				sort: 'stars',
			}
			history.push(`/results?${queryString.stringify(newParams)}`)
			dispatch(fetchResults(newParams))
		} else {
			newParams = parsed
			delete newParams.sort
			history.push(`/results?${queryString.stringify(newParams)}`)
			dispatch(fetchResults(newParams))
		}
	}
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-end',
			}}
		>
			<Typography style={{ marginRight: '5px' }}>Sort: </Typography>
			<Select id='sort-select' value={sortValue} onChange={handleSortChange}>
				<MenuItem value='best-match'>Best Match</MenuItem>
				<MenuItem value='stars'>Stars</MenuItem>
			</Select>
		</div>
	)
}
