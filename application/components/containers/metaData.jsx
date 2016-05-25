/*
 * React-helmet component will manage all changes to the document head
 * include title, meta, link, script, and base tags.
 * - more example: https://github.com/nfl/react-helmet 
 */

import React from 'react';
import { render } from 'react-dom';
import Helmet from 'react-helmet';

export default function MetaData () {
    return (
      <Helmet
        title='Homepage |  Frost'
        defaultTitle='Comic Relief | Frost'
        meta={[
          {'name': 'description', 'content': 'Red Nose Day non-event registration journey'},
          {'property': 'og:title', 'content': ''},
          {'property': 'og:type', 'content': ''},
          {'property': 'og:image', 'content': ''},
          {'property': 'og:url', 'content': ''},
          {'property': 'og:description', 'content': ''}
        ]}
        onChangeClientState={(newState) => console.log(newState)}
      />
    );
};

render((
  React.createElement(MetaData)
), document.getElementById('meta'));