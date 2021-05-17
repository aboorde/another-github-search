import { useLocation } from 'react-router'
import queryString from 'query-string'
import { useSelector } from 'react-redux'
import { getResultById } from '../../redux/search/selectors'
import { Grid, List, ListItem, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const Details = () => {
	const location = useLocation()
	const parsed = queryString.parse(location.search)
	const result = useSelector(getResultById(parsed.id))
	const getQueryString = () => {
		let newObject = parsed
		delete newObject.id
		return queryString.stringify(newObject)
	}
	if (!result) return <div>No details found</div>

	const Item = ({ label, value }: { label: string; value: string }) => (
		<ListItem>
			<ListItemText primary={value} secondary={label} />
		</ListItem>
	)
	return (
		<Grid container>
			<Grid item xs={12} md={12}>
				<Link to={`/results?${getQueryString()}`}>{`< Back to Results`}</Link>
				<List>
					<Item label={'Repository Name'} value={result.name} />
					<Item label={'Description'} value={result.description} />
					<Item label={'# of Stars'} value={result.stargazers_count} />
					<Item label={'Language'} value={result.language} />
					<Item label={'Owner'} value={result.owner.login} />
				</List>
			</Grid>
		</Grid>
	)
}
