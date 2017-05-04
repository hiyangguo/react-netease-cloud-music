/** Libs **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Components **/
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';

export default class TopPlayList extends Component {
  static get propTypes() {
    return {
      topPlayListData: PropTypes.object,
      fetchData: PropTypes.func
    }
  }

  componentWillMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { topPlayListData: { playlists: items } } = this.props;
    return (<div>
      <List>
        <Subheader>热门音乐</Subheader>
        {
          items.map(item => {
            const { name, coverImgUrl, id } = item;
            return (
              <ListItem
                key={id}
                primaryText={name}
                leftAvatar={<Avatar src={coverImgUrl}/>}
              />
            )
          })
        }
      </List>
    </div>)
  }
}