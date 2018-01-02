import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

class HeadInfo extends React.Component {
  render() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <title>{this.props.pageTitle}</title>
        <meta name="description" content={this.props.pageDescription} />

        {/* Open Graph tags */}
        <meta property="og:title" content={this.props.pageTitle} />
        <meta property="og:description" content={this.props.pageDescription} />
        <meta property="og:image" content={this.props.pageImage} />
        <meta property="og:url" content={this.props.pageWebsite} />

        {/* Twitter Open Graph tags */}
        <meta property="twitter:title" content={this.props.pageTitle} />
        <meta property="twitter:description" content={this.props.pageDescription} />
        <meta property="twitter:image" content={this.props.pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site" content={this.props.pageWebsite} />

        {/* Font Awesome */}
        {/* <script defer src="https://use.fontawesome.com/releases/v5.0.2/js/all.js" /> */}

        {/* IonIcons */}
        <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        <script src="https://unpkg.com/ionicons@4.0.0-6/dist/ionicons.js" />

        {/* Material Icons */}
        {/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" /> */}
      </Helmet>
    );
  }
}

HeadInfo.propTypes = {
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  pageImage: PropTypes.string,
  pageWebsite: PropTypes.string,
};

HeadInfo.defaultProps = {
  pageTitle: 'React Template Demo',
  pageDescription: 'Default meta description found in HeadInfo.js',
  pageImage: 'Default Image_URL found in HeadInfo.js',
  pageWebsite: 'http://oddscenes.com',
};

export default HeadInfo;
