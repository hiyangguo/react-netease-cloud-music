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
  },
  subheader: {
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '28px',
    width: '100%',
    borderLeft: '7px solid #f44336',
    margin: '10px 0'
  }
};

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
        <GridList
          cellHeight={180}
        >
          <Subheader style={styles.subheader}>推荐歌单</Subheader>
          {result.map((obj) => (
            <GridTile
              key={obj.id}
              title={obj.name}
              subtitle={<span>by <b>{obj.copywriter}</b></span>}
              actionIcon={<IconButton><Headset color="white"/></IconButton>}
            >
              <img src={obj.picUrl}/>
            </GridTile>
          ))}
        </GridList>
      </div>)
  }
}