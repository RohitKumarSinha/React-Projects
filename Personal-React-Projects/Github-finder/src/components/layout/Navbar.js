import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// fetching the data icon and title
// creating the nav with added some bg color
// now the data is put into i tag and h1 tag
const Navbar = ({ icon, title }) => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
};

// if app can't pass data then we use this default data
Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github'
};

// declaring that these two types of object is necessary
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

// export navbar component to use it
export default Navbar;
