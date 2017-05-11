import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListDetail from '../components/ListDetail';
import * as actionsCreators from '../actions/topPlayList';
import * as personalizedActionsCreators from '../actions/personalized';
import * as selector from '../reducers/playList';
import * as personalizedSelector from '../reducers/personalized';

const mapState2Props = state => {
  return {
    topPlayListData: selector.getList(state),
    personalizedData: personalizedSelector.getList(state),
  }
}

const mapDispacth2Props = dispatch => {
  const actions = bindActionCreators(Object.assign({}, actionsCreators, personalizedActionsCreators), dispatch);
  return {
    onFetchData: actions.fetchTopPlayList,
    onFetchPersonalized: actions.fetchPersonalized,
  };
}

export default connect(mapState2Props, mapDispacth2Props)(ListDetail)
