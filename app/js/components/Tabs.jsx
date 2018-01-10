import React from 'react';

class Tabs extends React.Component {
  render() {
    return (
      <div className="tabs">
        <a href="/">🏠 Home Page</a>
        <a href="about">ℹ️ About Page</a>
        <a href="plugin-anime">🏃 AnimeJS</a>
        <a href="plugin-moment">🕑 MomentJS</a>
        <a href="plugin-scroll">🔃 React Scroll</a>
        <a href="plugin-three">💠 ThreeJS</a>
        <a href="plugin-uikit">🛠️ UI Kit</a>
      </div>
    );
  }
}

export default Tabs;
