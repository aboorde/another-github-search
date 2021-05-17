import { InputBase } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { fetchResults } from '../../redux/search/actions'
import { useSearchInputStyles } from './styles'
import queryString from 'query-string'

export const SearchInput = () => {
	const location = useLocation()
	const parsed = queryString.parse(location.search)
	const [queryValue, setQueryValue] = useState(parsed.q || '')
	const dispatch = useDispatch()
	const history = useHistory()
	const { search: searchClass } = useSearchInputStyles()

	// Reset Input when going Home
	useEffect(() => {
		if (location.pathname === '/') {
			setQueryValue('')
		}
	}, [location])

	// Submit Search
	const handleSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault()
		const target = e.target as typeof e.target & {
			searchQuery: { value: string }
		}
		const searchQuery = target.searchQuery.value

		dispatch(fetchResults({ q: searchQuery }))
		history.push(`/results?q=${searchQuery}`)
	}

	// Change Input Value
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setQueryValue(e.target.value)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className={searchClass}>
				<InputBase
					placeholder='Search…'
					inputProps={{ 'aria-label': 'search' }}
					name='searchQuery'
					value={queryValue}
					onChange={handleChange}
					style={{ paddingLeft: '20px' }}
				/>
			</div>
		</form>
	)
}
