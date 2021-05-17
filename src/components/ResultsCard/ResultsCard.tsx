import { Button, Grid, Paper, Typography } from '@material-ui/core'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import StarBorderIcon from '@material-ui/icons/StarBorder'

export const useResultsCardStyles = makeStyles(
	{
		root: {
			padding: '20px',
			transition: '0.4s',
			'&:hover': {
				boxShadow: '1px 1px 8px 2px #6f42c1',
			},
			height: '250px',
		},
		detailsLink: {
			textDecoration: 'none',
		},

		subHead: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
	},
	{ name: 'ResultsCard' }
)

interface Props {
	result: {
		name: string
		stargazers_count: string
		language: string
		owner: { login: string }
	}
	linkPath: string
}

export const ResultsCard: FC<Props> = ({ result, linkPath }) => {
	const { root, detailsLink, subHead } = useResultsCardStyles()
	return (
		<Paper elevation={3} className={root}>
			<Grid container style={{ height: '100%' }}>
				<Grid
					item
					container
					direction='column'
					style={{ marginBottom: 'auto' }}
				>
					<Typography variant='h6'>{`${result.name}`}</Typography>
					<div className={subHead}>
						<Typography variant='caption'>{`${result.owner.login}`}</Typography>
						<Typography>{`${result.language}`}</Typography>
					</div>
				</Grid>
				<Grid item container justify='space-between' alignItems='center'>
					<Typography style={{ display: 'flex' }}>
						<StarBorderIcon style={{ marginRight: '5px' }} />{' '}
						{result.stargazers_count}
					</Typography>
					<Button variant='outlined' color='primary'>
						<Link
							className={detailsLink}
							to={linkPath}
						>{`More Details >`}</Link>
					</Button>
				</Grid>
			</Grid>
		</Paper>
	)
}
