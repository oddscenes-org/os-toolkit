import React from 'react';
import { render } from 'react-dom';
import ReactGA from 'react-ga';

// Metadata Component
import HeadInfo from './components/HeadInfo.jsx';

// Nav Import
import Header from './components/Header.jsx';

// Plugins
import PluginMoment from './components/PluginMoment.jsx';
import PluginScroll from './components/PluginScroll.jsx';
import PluginVideo from './components/PluginVideo.jsx';
import PluginModal from './components/PluginModal.jsx';
import './components/PluginAnime.jsx';

// Analytics Info
ReactGA.initialize('UA-000000-01');

// Page header info
render(<HeadInfo
  pageTitle="React Template"
  pageDescription="A starter app for building production ready React templates"
  pageImage="./../../stars.png"
  pageWebsite="http://example.com"
/>, document.getElementById('head-info'));

// Sitewide components (every page)
render(<Header />, document.getElementById('header'));

// Conditional components
if (document.body.contains(document.getElementById('plugin-moment'))) {
  render(<PluginMoment />, document.getElementById('plugin-moment'));
}

if (document.body.contains(document.getElementById('plugin-scroll'))) {
  render(<PluginScroll />, document.getElementById('plugin-scroll'));
}

if (document.body.contains(document.getElementById('plugin-video'))) {
  render(<PluginVideo />, document.getElementById('plugin-video'));
}

if (document.body.contains(document.getElementById('plugin-modal'))) {
  render(<PluginModal />, document.getElementById('plugin-modal'));
}