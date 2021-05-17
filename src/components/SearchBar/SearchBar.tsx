import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { SearchInput } from './SearchInput'

export const SearchBar = () => (
	<AppBar position='static' style={{ backgroundColor: '#6f42c1' }}>
		<Toolbar>
			<Typography style={{ flexGrow: 1 }} variant='h6'>
				<Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
					Github Search
				</Link>
			</Typography>

			<SearchInput />
		</Toolbar>
	</AppBar>
)
