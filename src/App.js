/** Libs **/
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';


/** Component **/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuiTheme from './constants/MuiTheme';

/** Other **/
import { getStore } from './store';
import routes from './routes';

/** Style **/
import './style/index.less';

injectTapEventPlugin();
const store = getStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={MuiTheme}>
          <Router history={hashHistory} routes={routes}/>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
