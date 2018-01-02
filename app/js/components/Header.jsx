import React from 'react';
import Tabs from './Tabs.jsx';
import Logo from './../../img/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={Logo} className="logo" alt="Logo" />
        <Tabs />
      </div>
    );
  }
}

export default Header;
