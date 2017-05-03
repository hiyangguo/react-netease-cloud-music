import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TopPlayList from '../components/TopPlayList';
import * as actionsCreators from '../actions/topPlayList';
import * as selector from '../reducers/playList';

const mapState2Props = state => {
  return {
    items: selector.getState(state),
  }
}

const mapDispacth2Props = dispatch => {
  const actions = bindActionCreators(actionsCreators, dispatch);
  return {
    fetchData: actions.fetchTopPlayList,
  };
}

export default connect(mapState2Props, mapDispacth2Props)(TopPlayList)
