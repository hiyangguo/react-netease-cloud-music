import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';


class App extends Component {
  static get childContextTypes() {
    return {
      router: PropTypes.object
    }
  }

  getChildContext() {
    return {
      router: this.props.router
    };
  }

  render() {
    return (
      <div>
        <AppBar title="网易云音乐" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
