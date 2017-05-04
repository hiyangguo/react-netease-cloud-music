import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';


const styles = {
  style: {
    height: '50px'
  },
  titleStyle: {
    fontSize: '16px',
    height: '50px',
    lineHeight: '50px'
  },
  iconButtonStyle: {
    margin: '-7px 1px 0px -8px'
  }
};

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
    const { style, titleStyle, iconButtonStyle } = styles;
    return (
      <div>
        <AppBar
          title="网易云音乐"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          style={style}
          titleStyle={titleStyle}
          iconElementLeft={<IconButton style={iconButtonStyle}><NavigationMenu /></IconButton>}
        />
        {this.props.children}

      </div>
    );
  }
}

export default App;
