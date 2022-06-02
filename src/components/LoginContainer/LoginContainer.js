import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserActions from '../../redux/actions/userActions'
import withStyles from '@material-ui/core/styles/withStyles'
import LoginContainerStyles from './LoginContainerStyles'

export class LoginContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {}
	}
	render () {
		let { classes } = this.props;
		console.log(classes)
		return (
			<div className={classes.root}>LoginContainer</div>
		)
	}
}

let mapStateToProps = (state) => {
	return {
	  loggedIn: state.UserReducer.loggedIn,
	}
}
  
const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (data) => dispatch(UserActions.loginUser(data)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(LoginContainerStyles, {withTheme: true})(LoginContainer))