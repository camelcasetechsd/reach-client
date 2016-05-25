import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'

require('./header.scss');

const Header = React.createClass({
  render() {
    return (
      <div>
        <div className="region-header-top-wrapper"></div>
        <div className="region-header-inner-wrapper">
            <div className="region region-header">
              <div id="block-rnd17-branding" className="block block-system block-system-branding-block">
                <a href="/" title="Home" rel="home" className="site-logo">
                  <img src="/assets/images/logo/logo.svg" alt="Home" />
                </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

render(<Header/>, document.getElementById("header"))