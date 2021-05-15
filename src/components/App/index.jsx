import React from 'react';
import { useStyles } from './styles';

const App = () => {
	const classes = useStyles();

	return <div className={classes.app}>Hello ReactJS</div>;
};

export default App;
