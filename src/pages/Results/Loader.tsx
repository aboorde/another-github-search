import { CircularProgress, Grid } from '@material-ui/core'

export const Loader = () => {
	return (
		<Grid container>
			<Grid
				container
				item
				xs={12}
				md={12}
				alignItems='center'
				direction='column'
			>
				<div style={{ marginBottom: '30px' }}>Results Loading. Please Wait</div>
				<CircularProgress />
			</Grid>
		</Grid>
	)
}
