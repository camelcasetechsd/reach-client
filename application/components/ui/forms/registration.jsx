import React, { Component, PropTypes } from 'react'
import { LoginDetail } from './steps/loginDetail.jsx'
import { ContactDetail } from './steps/contactDetail.jsx'
import { CompleteGP } from './steps/completeGivingPage.jsx'

const steps = 
    [
      {name: 'Login Detail', component: <LoginDetail/>},
      {name: 'Contact Detail', component: <ContactDetail/>},
      {name: 'Complete Giving Page', component: <CompleteGP/>}
    ]

export { steps }