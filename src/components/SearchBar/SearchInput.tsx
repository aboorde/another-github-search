import { InputBase } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchResults } from '../../redux/search/actions'
import { useSearchInputStyles } from './styles'
import { useAppLocation } from '../../utils/utils'

export const SearchInput = () => {
	const { history, location, parsedQueryParams: parsed } = useAppLocation()
	const [queryValue, setQueryValue] = useState(parsed.q || '')
	const dispatch = useDispatch()
	const { search: searchClass, searchInput } = useSearchInputStyles()

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
					className={searchInput}
				/>
			</div>
		</form>
	)
}
