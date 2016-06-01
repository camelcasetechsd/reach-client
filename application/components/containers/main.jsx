import React, { Component } from 'react';
import { render } from 'react-dom';
import routes from './../utils/routes/routes.jsx'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
// All store creation specific code is located in ./create-store.js
import createStore from './../utils/store/create-store'

require('./main.scss');
require('../../../public/assets/sass/__all.scss');

const store = createStore()

export class Main extends Component {
  render() {
  	// Now is the time to meet the first binding that redux-react (https://github.com/rackt/react-redux)
	// brings to us: the Provider component.

	// Provider is a React Component designed to be used as a wrapper of your application's root component. Its
	// purpose is to provide your redux instance to all of your application's components. How it does that does not
	// really matter to us but just to let you know, it's using React's context feature (it's undocumented so you
	// don't have to know about it, but if you're curious:
	// https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html).

	// As explained above, the Provider must wrap your application's Root component. This way,
	// this component and all of its children (even deeply nested ones) will have access to your
	// Redux store. Of course, to allow Provider to do that, you must give it the store
    return (
		<Provider store={store}>
	    	<Router history={browserHistory} routes={routes} />
	  	</Provider>
	)
  }
}

render((
  React.createElement(Main)
), document.getElementById('main'));