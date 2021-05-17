import { Grid, Typography } from '@material-ui/core'
import OctoCat from './Octocat.png'

export const Home = () => {
	return (
		<Grid container>
			<Grid item xs={12} md={7}>
				<Typography variant='h1'>
					Search{' '}
					<span style={{ color: '#6f42c1', fontWeight: 'bold' }}>
						Github Repositories
					</span>{' '}
					quickly with the click of a button
				</Typography>
			</Grid>
			<Grid item xs={12} md={5}>
				<img
					src={OctoCat}
					alt='octocat'
					style={{ width: '100%', height: 'auto' }}
				/>
			</Grid>
		</Grid>
	)
}
