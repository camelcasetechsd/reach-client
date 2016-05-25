/*
 * Toggle Display
 * - simply show and hide content onClick
 */

import React from 'react'
import { render } from 'react-dom'

function isDefined(val) { return val != null; }

const ToggleDisplay = React.createClass({

	propTypes: {
		hide: React.PropTypes.bool,
		show: React.PropTypes.bool
	},

	shouldHide: function() {
		var shouldHide;
		if(isDefined(this.props.show)) { 
			shouldHide = !this.props.show;
		}
		else if(isDefined(this.props.hide)) {
			shouldHide = this.props.hide;
		}
		else {
			shouldHide = false;
		}

		return shouldHide;		
	},

	render: function() {
		var style = {};
		
		if(this.shouldHide()) {
			style.display = 'none';
		}

		return (
			<span style={style} {...this.props} />
		);
	}

});

/*
 * Example usage
 */
const ToggleDisplayDemo = React.createClass({
    
  getInitialState: function() {
    return {
        show: true
    };
  },
    
  handleClick: function() {
    this.setState({ show: !this.state.show });
  },

  render: function() {
    return (
      <div>
      	<h3>Toggle display example:</h3>
      	<button onClick={ this.handleClick }>Click to toggle</button>
          <ToggleDisplay show={this.state.show}>
            <p>Hello</p>
          </ToggleDisplay>
          <ToggleDisplay hide={this.state.show}>
            <p>Is it me you're looking for?</p>
          </ToggleDisplay>
      </div>
    );
  }
});

//module.exports = ToggleDisplayDemo;
render(<ToggleDisplayDemo />, document.getElementById('toggleDisplay'));
