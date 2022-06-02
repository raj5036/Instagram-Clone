import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import AppStyles from './AppStyles';
import { ThemeProvider } from '@material-ui/core'
import LightStylesConfig from './lib/StyleConfigs/ColorsConfig/LightStylesConfig'
import DarkStylesConfig from './lib/StyleConfigs/ColorsConfig/DarkStylesConfig'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginContainer from './components/LoginContainer/LoginContainer';
import RoutePath from './lib/RoutePath';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isDarkMode: false,
      isLoggedIn: false
    }
  }

  render () {
    const { classes } = this.props
    const { isDarkMode, isLoggedIn } = this.state
    console.log(classes)
    return (
      <ThemeProvider theme={isDarkMode ? DarkStylesConfig : LightStylesConfig}>
        {/* {LightStylesConfig.palette.background.level2}
        <div className={classes.root}>Hi</div> */}
        <Router>
          <Switch>
            <Route 
              exact 
              path={RoutePath.loginPath} 
              component={LoginContainer}  
            />
          </Switch>
        </Router>
      </ThemeProvider>
    )
  }
}

export default withStyles(AppStyles)(App);
