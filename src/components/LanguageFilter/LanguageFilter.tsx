import {
	Button,
	Checkbox,
	FormControl,
	InputLabel,
	ListItemIcon,
	ListItemText,
	MenuItem,
	Select,
} from '@material-ui/core'
import { useState } from 'react'
import queryString from 'query-string'
import { useHistory, useLocation } from 'react-router'
import { fetchResults } from '../../redux/search/actions'
import { useDispatch } from 'react-redux'

const languages = [
	'Go',
	'Java',
	'JavaScript',
	'TypeScript',
	'Python',
	'Ruby',
	'Rust',
	'Scala',
]

const getInitialFilterValue = (params: any) => {
	if (!params.language) return []
	if (typeof params.language === 'string') return [params.language]
	return params.language
}

export const LanguageFilter = () => {
	const location = useLocation()
	const history = useHistory()
	const dispatch = useDispatch()
	const parsed = queryString.parse(location.search)
	const [filterValues, setFilterValues] = useState<string[]>(
		getInitialFilterValue(parsed)
	)

	const handleChange = (e: any) => {
		setFilterValues(e.target.value)
	}

	const handleApplyFilter = () => {
		let newParams
		if (filterValues.length === 0) {
			newParams = parsed
			delete newParams.language
		} else {
			newParams = {
				...parsed,
				language: filterValues,
			}
		}
		history.push(`/results?${queryString.stringify(newParams)}`)
		dispatch(fetchResults(newParams))
	}

	return (
		<div style={{ display: 'flex', alignItems: 'flex-end' }}>
			<FormControl>
				<InputLabel htmlFor='language-filter-select'>
					Choose Language(s)
				</InputLabel>
				<Select
					style={{ minWidth: '190px' }}
					id='language-filter-select'
					value={filterValues}
					onChange={handleChange}
					multiple
					renderValue={(filterValues) => (filterValues as string[]).join(', ')}
				>
					{languages.map((language: string) => (
						<MenuItem key={language} value={language}>
							<ListItemIcon>
								<Checkbox checked={filterValues.indexOf(language) > -1} />
							</ListItemIcon>
							<ListItemText primary={language} />
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<Button
				variant='contained'
				color='primary'
				style={{ marginLeft: '20px' }}
				onClick={handleApplyFilter}
			>
				Apply Filter
			</Button>
		</div>
	)
}
