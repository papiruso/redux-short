<h1>Redux Short Connect</h1>

<p>This module allows you not to write long functions for connecting redux to the component. You can connect action and reducer</p>

# Example:


<h2>Connect reducer store to component</h2>
```jsx
import React from 'react';
import reduxShort from 'redux-short';

class Profile extends React.Component {
	render() {
		const { user } = this.props;

		return (
			<div>
				{user.name}
			</div>
		);
	}
}

export default reduxShort(['user'])(Profile);
```

<h2>Connect reducer store and action  to component</h2>
```jsx
import React from 'react';
import reduxShort from 'redux-short';
import { getUserByid } from '../action/userAction';

class Profile extends React.Component {
	componentDidMount() {
		this.props.getUserByid(...);
	}
	
	render() {
		const { user } = this.props;

		return (
			<div>
				{user.name}
			</div>
		);
	}
}

export default reduxShort(['user'], { getUserByid })(Profile);
```