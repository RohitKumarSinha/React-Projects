import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

// fecthing the data from app.js
// if data is loading from the server then we call spinner component
// else mapping the each user data in userItem one by one here key is for unique identify the list
const Users = () => {
	const githubContext = useContext(GithubContext);

	const { loading, users } = githubContext;

	if (loading) {
		return <Spinner />;
	} else {
		return <div style={userStyle}>{users.map(user => <UserItem key={user.id} user={user} />)}</div>;
	}
};

// display that data into that style in outer text
const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default Users;
