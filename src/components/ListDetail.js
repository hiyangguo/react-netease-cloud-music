/** Libs **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Components **/
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Headset from 'material-ui/svg-icons/hardware/headset';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
}
export default class TopPlayList extends Component {
  static get propTypes() {
    return {
      topPlayListData: PropTypes.object,
      personalizedData: PropTypes.object,
      onFetchData: PropTypes.func,
      onFetchPersonalized: PropTypes.func
    }
  }

  componentWillMount() {
    const { onFetchData, onFetchPersonalized } = this.props;
    onFetchData();
    onFetchPersonalized();
  }

  render() {
    const { topPlayListData: { playlists: items }, personalizedData: { result } } = this.props;
    return (
      <div style={styles.root}>
        List Detail
      </div>
    );
  }
}