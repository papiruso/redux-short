<h1>Redux Short Connect</h1>

<p>This module allows you not to write long functions for connecting redux to the component. You can connect action and reducer</p>

```
npm i redux-short
```

<img src="https://lh3.googleusercontent.com/pT8VCPp8BkaWwF01ySZrnW8jHO0Hppn_8v4DIf_CZb3d9nyjOxqqKveikgHdNqHqFYHaUyUoRNRUxvIFTueaUCTa_U207svjXt9ZZKcQatbKVg9g-S_mZkzyjXg0xcnVa3IrhoAhvsoKL-IXE6zfVOpsme4OFXCd1KfLhPlpY44W2RJROC_RKLD3J3zVlJhzxwf-LRxXyXGmyMnMDpjmPzs7x_9r3Mn8NvzV8sREIIBMnwevuPrcbWx-mN45JQwKu-H3p-ULizO2I2-5UCrTizcyPQNHQr6Lfm8oXslto4-UvkDsnUHiS7wJWUVpybDuUOoIm-fzfO0P3JvbE8MueDNnOsjUkO_XgVkbyR-htB_LKeOWdgdqLjM2zgubz4VslgpgSVPsRsW4CnorrDdpjnVARh_K4qaDs9BpG9EiPceUjxMrhduWCDXqr6FBYOSb828LWwkmw7SZyhuWWnOXsjkluexrPLfTPCqJTDMkcVxuvj72wGxqePHeEXrfmZXiy3ktLo6gbNpaMeQTBPoOZDIqMhL2YVv0kQR_kMopi2eC8Fpsu6PyXls7WTPPU6LX_v5FyXPQCc3zw64P9zr_0FYwNtNcQxw_hErRQM0V0B01KhpY2LM0sMzQGIS0onZcLVJgj5xXsx7cVixqcgZcJiHigkQ5HPEzHcRvof3_2tciEqqtL9VR3zehN0BO=w1363-h551-no?authuser=0" alt="redux short connect"/>

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
