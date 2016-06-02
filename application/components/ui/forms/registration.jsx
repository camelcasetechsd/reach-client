import React, { Component, PropTypes } from 'react'
import LoginDetail from './steps/loginDetail.jsx'
import ContactDetail from './steps/contactDetail.jsx'
import CompleteGP from './steps/completeGivingPage.jsx'

const steps = 
    [
      {name: 'Login Detail', url: "/create-user-adult", component: LoginDetail},
      {name: 'Contact Detail', url: "/create-user-adult-contact", component: ContactDetail},
      {name: 'Complete Giving Page', url: "/user-giving-page", component: CompleteGP}
    ]

export { steps };
