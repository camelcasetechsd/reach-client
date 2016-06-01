import React from 'react'
import { Route } from 'react-router'
import { MultiStepContainer } from './../../ui/forms/multiStep/multiStepContainer.jsx'
import { App } from './../../ui/app.jsx'
import { About } from './../../ui/about.jsx'
import { Inbox } from './../../ui/inbox.jsx'
import { Message } from './../../ui/message.jsx'


export default (
  <Route path="/" component={App}>
    <Route path="about" component={About} />
    <Route path="inbox" component={Inbox}>
      <Route path="messages/:id" component={Message} />
    </Route>
    <Route path="create-user-adult" currentStep={0} component={MultiStepContainer} />
    <Route path="create-user-adult-contact" currentStep={1} component={MultiStepContainer} />
    <Route path="user-giving-page" currentStep={2} component={MultiStepContainer} />
  </Route>
)
