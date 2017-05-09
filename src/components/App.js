/** Libs **/
import React, { Component } from 'react';
/** Components **/
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import PlayButton from 'material-ui/svg-icons/av/play-circle-outline';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

import { blue300, indigo900 } from 'material-ui/styles/colors';


const styles = {
  style: {
    position: 'fixed',
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
        <div style={{
          paddingTop: '50px',
          paddingBottom: '70px'
        }}>
          {this.props.children}
        </div>
        <Paper zDepth={1} style={{
          position: 'fixed',
          bottom: '0px',
          width: '100%',
          zIndex: 10
        }}>
          <Avatar
            image=""
            style={{
              width: '50px',
              height: '50px',
              margin: 5,
              float: 'left'
            }}
          />
          <Subheader className="music-title" style={{
            fontSize: '16px',
            fontWeight: 'normal',
            lineHeight: '16px',
            padding: '10px 60px 10px 70px',
            width: 'calc(100% -40px)'
          }}>未知</Subheader>
          <Subheader className="music-author" style={{
            fontSize: '14px',
            color: '#b5b5b5',
            fontWeight: 'normal',
            lineHeight: '16px',
            padding: '0px 60px 0px 70px',
            width: 'calc(100% -40px)'
          }}>未知</Subheader>
          <IconButton iconStyle={{
            width: 40,
            height: 40
          }}
                      style={{
                        width: 40,
                        height: 40,
                        padding: 0,
                        position: 'absolute',
                        top: 10,
                        right: 10
                      }}><PlayButton /></IconButton>
        </Paper>
      </div>
    );
  }
}

export default App;
