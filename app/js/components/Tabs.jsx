import React from 'react';

class Tabs extends React.Component {
  render() {
    return (
      <div className="tabs">
        <a href="/">Home Page</a>
        <a href="about">About Page</a>
        <br /><br />
        <a href="plugin-anime">🏃 AnimeJS</a>
        <a href="plugin-moment">🕑 MomentJS</a>
        <a href="plugin-scroll">🔃 React Scroll</a>
        <a href="plugin-video">📹 React Video</a>
        <a href="plugin-modal">🔲 React Modal</a>
        <a href="plugin-tooltip">ℹ️ React Tooltip</a>
        <a href="plugin-three">💠 ThreeJS</a>
      </div>
    );
  }
}

export default Tabs;
