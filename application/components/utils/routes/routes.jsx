import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { MultiStepContainer } from './../../utils/forms/multiStepContainer.jsx'
// All store creation specific code is located in ./create-store.js
import createStore from './../store/create-store'
import { Provider } from 'react-redux'

const store = createStore()

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/create-user-adult">Register</Link></li>
        </ul>
        {
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
        // you built previously (via a "store" props).
        }
        <Provider store={ store }>
          {this.props.children}
        </Provider>
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
      <Route path="create-user-adult" currentStep={0} component={MultiStepContainer} />
      <Route path="create-user-adult-contact" currentStep={1} component={MultiStepContainer} />
      <Route path="user-giving-page" currentStep={2} component={MultiStepContainer} />
    </Route>
  </Router>
), document.getElementById('nav'))
