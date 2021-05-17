import { makeStyles } from '@material-ui/core/styles'

export const useSearchInputStyles = makeStyles(
	{
		search: {
			backgroundColor: 'white',
			borderRadius: '4px',
		},
		searchInput: {
			'& input': {
				paddingLeft: '20px',
				borderRadius: '4px',
			},
		},
	},
	{ name: 'SearchInput' }
)
