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
import CircularProgress from 'material-ui/CircularProgress';

/** Constants **/
import ResponseStatus from '../constants/ResponseStatus';

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
    const { topPlayListData: { status, playlists: items }, personalizedData: { result } } = this.props;
    return (
      <div>
        {
          status === ResponseStatus.REQUEST && (<CircularProgress style={{
            position: 'absolute',
            margin: '20px auto',
            left: 0,
            right: 0
          }}/>)
        }
        {
          status === ResponseStatus.SUCCESS && (
            <GridList
              cellHeight={200}
              className="personalized-data-list"
              style={styles.root}
            >
              <Subheader style={styles.subheader}>推荐歌单</Subheader>
              {
                result.map((obj) => {
                  const { id, name, copywriter, picUrl } = obj;
                  return (
                    <GridTile
                      className="grid-tile"
                      key={id}
                      title={name}
                      subtitle={<span>by <b>{copywriter}</b></span>}
                      actionIcon={<IconButton><Headset color="white"/></IconButton>}
                    >
                      <img src={picUrl} alt={name}/>
                    </GridTile>
                  );
                })
              }
            </GridList>
          )
        }

      </div>)
  }
}