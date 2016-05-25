## Components

#### File structure
```
./components
	 └──example/
       ├──example.jsx (or example.js)
       ├──example.rt
       ├──example.scss
       └──example.spec.js
```
#### Template

React's [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) coupled html markup with component render function and place it within JS file. Though this approach has been encouraged and accepted by many others, not every developer is comfortable with it. We'd like to explore futher but take slower step to have both methods. 

##### *.jsx 
```
# sample.jsx
import React, { Component } from 'react';

export class Main extends Component {
  render() {
    return (
     	<div> Hello World! </div>
		);
  }
}
```

For decoupled template, we're using [react-templates](https://github.com/wix/react-templates)

##### *.js + *.rt
```
# sample.js
import React, { Component } from 'react';
import template from 'react-templates!./sample.rt';

require('./sample.scss');

export class Main extends Component {
  render() {
    return template()
  }
}

# sample.rt
<div>
  Hello World!
</div>
```

See also:

https://medium.com/@housecor/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98#.2ixzng1nz
https://medium.com/javascript-scene/jsx-looks-like-an-abomination-1c1ec351a918#.9zxrdosc7

#### Sass 

To include styling for component, simply use `require`

```
# sample.jsx (or sample.js)
import React, { Component } from 'react';

require('./sample.scss');
```
This .scss file should only contain component specfic style. If a styling is reusable, make it generic and move to `public/assets/sass/core/*`



#### Styleguide 

We're using [KSS node](https://github.com/kss-node/kss-node#readme), add comments on .scss file and it generates style guide automatically
```
// Button
// Your standard button suitable for clicking.
//
// :hover   - Highlights when hovering.
// .shiny   - Do not press this big, shiny, red button.
//
// Style guide: components.button
.button {
  ...
}
.button.shiny {
  ...
}
```

To view styleguide, go to [http://localhost/public/styleguide](http://localhost/public/styleguide) 

#### Unit testing

React's `react-addons-test-utils` handles unit testing. We're choosing [Karma](https://karma-runner.github.io/0.13/index.html) and [Jasmine](http://jasmine.github.io/) as our testing framework. 
Airbnb has released a testing utility called [Enzyme](http://airbnb.io/enzyme/docs/guides/webpack.html), which makes it easy to assert, manipulate, and traverse React Components' output.

A typical test looks like:

```
# sample.spec.js
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Foo from '../src/Foo';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<Foo />).contains(<div className="foo" />)).toBe(true);
  });

  it("contains spec with an expectation", function() {
    expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it("contains spec with an expectation", function() {
    expect(mount(<Foo />).find('.foo').length).toBe(1);
  });

  it("can run an expectation with render", function() {
    expect(render(<Foo />).find('.foo').length).toBe(1);
  });
});

```



See also: 
http://airbnb.io/enzyme/docs/guides/webpack.html
https://facebook.github.io/react/docs/test-utils.html
