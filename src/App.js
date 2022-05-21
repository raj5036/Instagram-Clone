import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import AppStyles from './AppStyles';
import { ThemeProvider } from '@material-ui/core';
import LightStylesConfig from './lib/StyleConfigs/ColorsConfig/LightStylesConfig'
import DarkStylesConfig from './lib/StyleConfigs/ColorsConfig/DarkStylesConfig'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isDarkMode: false
    }
  }

  render () {
    const { classes } = this.props
    const { isDarkMode } = this.state
    console.log(classes)
    return (
      <ThemeProvider theme={isDarkMode ? DarkStylesConfig : LightStylesConfig}>
        {LightStylesConfig.palette.background.level2}
        <div className={classes.root}>Hi</div>
      </ThemeProvider>
    )
  }
}

export default withStyles(AppStyles)(App);
