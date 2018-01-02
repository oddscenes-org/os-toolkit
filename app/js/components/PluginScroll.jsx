import React from 'react';

const Scroll = require('react-scroll');
const { Link } = Scroll;
const { Element } = Scroll;

export default class PluginScroll extends React.Component {
  render() {
    return (
      <div className="scroll-demo">
        <Link
          activeClass="active"
          to="scrollWrap"
          spy
          smooth
          offset={-42}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <button>Scroll Demo</button>
        </Link>

        <div className="scroll-box">
          <Element name="scrollWrap" />
          Scrolled to element
        </div>
      </div>
    );
  }
}
