import React from 'react';

function Banner({ title, subtitle, children }) {
	if (title === 'Caverta') {
		title = 'Khana Khazana';
	}
	return (
		<React.Fragment>
			<div className="banner">
				<h1>{title}</h1>
				<p>{subtitle}</p>
				{children}
			</div>
		</React.Fragment>
	);
}

export default Banner;
