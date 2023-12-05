import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// cqlling the app function in strict mode and geeting that data from id root
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
