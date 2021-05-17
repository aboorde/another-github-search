import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResults } from '../../redux/search/actions'
import { getIsLoading } from '../../redux/search/selectors'
import { useAppLocation } from '../../utils/utils'

export const useResults = () => {
	const { history, parsedQueryParams } = useAppLocation()
	const dispatch = useDispatch()
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
