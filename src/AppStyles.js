let AppStyles = (theme) => ({
	root: {
	  flexGrow: 1,
	  backgroundColor: theme.palette.background.default,
	  color: theme.palette.info.light,
	  x : () => {console.log(theme.palette)}
	},
  });
  
export default AppStyles;  