import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loading from './component/Loading';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Loading/>
      </MuiThemeProvider>
    );
  }
}

export default App;
