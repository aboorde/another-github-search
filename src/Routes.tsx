import { Container } from '@material-ui/core'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import { SearchBar } from './components/SearchBar/SearchBar'
import { Details } from './pages/Details/Details'
import { Home } from './pages/Home/Home'
import { Results } from './pages/Results/Results'

export const Routes = () => {
	return (
		<Router>
			<SearchBar />
			<Container style={{ paddingTop: '20px' }}>
				<Switch>
					<Route path='/results'>
						<Results />
					</Route>
					<Route path='/details'>
						<Details />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Container>
		</Router>
	)
}
