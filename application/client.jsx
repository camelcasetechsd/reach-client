import React from 'react';
import { render } from 'react-dom';

import { Main } from './components/containers/main.jsx';
import { Metadata } from './components/containers/metaData.jsx';
import { Header } from './components/ui/header/header.jsx';
import { Footer } from './components/ui/footer/footer.jsx';
import Multistep from './components/utils/forms/multiStep.jsx'
import { steps } from './components/ui/forms/registration.jsx'


class App extends React.Component {
  render() {
    return (
        <Multistep initialStep={1} steps={steps}/>
    )
  }
}

render(<App/>, document.getElementById("main"))