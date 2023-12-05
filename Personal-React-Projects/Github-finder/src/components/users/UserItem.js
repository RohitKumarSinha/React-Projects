import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// fetching the user data which is login, avatar_url, html_utl
// displaying that inner information to screen
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<div className="card text-center">
			<img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
			<h3>{login}</h3>

			<div>
				<Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
					More
				</Link>
			</div>
		</div>
	);
};

// user must pass this data in object form
UserItem.prototype = {
	user: PropTypes.object.isRequired
};

export default UserItem;
