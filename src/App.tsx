import { CssBaseline } from '@material-ui/core'
import { Routes } from './Routes'
import {
	createMuiTheme,
	responsiveFontSizes,
	ThemeProvider,
} from '@material-ui/core/styles'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes />
		</ThemeProvider>
	)
}
