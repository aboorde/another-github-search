import { useHistory, useLocation } from 'react-router'
import queryString from 'query-string'

export const useAppLocation = () => {
	const location = useLocation()
	const history = useHistory()
	const parsedQueryParams = queryString.parse(location.search)

	return { location, history, parsedQueryParams }
}
