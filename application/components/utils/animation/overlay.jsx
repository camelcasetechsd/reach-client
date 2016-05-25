/*
 * Overlay 
 * - dim selected area
 */

import React from 'react'
import { render } from 'react-dom'

const Overlay = React.createClass({
  displayName: 'Overlay',

  propTypes: {
    container:   React.PropTypes.object,
    elementType: React.PropTypes.string,
    className:   React.PropTypes.string
  },

  getDefaultProps() {
    return {
      container:   document.body,
      elementType: 'div',
      className: 'overlays'
    };
  },

  shouldComponentUpdate() {
    return false;
  },

  componentDidMount() {
    this.buildContainer();
    this.renderOverlay();
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.container !== nextProps.container) {
      this.removeContainer();
      this.buildContainer(nextProps);
    }
    this.renderOverlay(nextProps);
  },

  componentWillUnmount() {
    this.removeContainer();
  },

  buildContainer(props) {
    const thisProps = props || this.props;
    this._overlayContainer = document.createElement(thisProps.elementType);
    const container = thisProps.container;
    container.classList.add(thisProps.className);  // TODO: check older browser support
    container.appendChild(this._overlayContainer);
  },

  removeContainer() {
    React.unmountComponentAtNode(this._overlayContainer);
    this.props.container.removeChild(this._overlayContainer);
    this._overlayContainer = null;
  },

  renderOverlay(props) {
    const thisProps = props || this.props;
    render(
      React.Children.only(thisProps.children),
      this._overlayContainer
    );
  },

  render() {
    return null;
  }
});

/*
 * Example usage
 */
const OverlayDemo = React.createClass({
  render: function() {
		return (
  	  <div>
  	    <Overlay>
  	      <span>Overlay example</span>
  	    </Overlay>
  	  </div>
  	);
  }
});

//module.exports = Overlay;
render(<OverlayDemo />, document.getElementById('overlay'));
