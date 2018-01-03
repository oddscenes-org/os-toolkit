import React from 'react';
import ReactTooltip from 'react-tooltip';

export default class PluginTooltip extends React.Component {
  render() {
    return (
      <div className="tooltip-component">
        <a
          data-tip="<h1>hello world</h1>"
          data-html
          data-effect="solid"
        >
          Tooltip (hover)
        </a>
        <ReactTooltip />
      </div>
    );
  }
}
