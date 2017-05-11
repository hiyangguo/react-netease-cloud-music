/** Libs **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link }from'react-router';

/** Components **/
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Headset from 'material-ui/svg-icons/hardware/headset';
import CircularProgress from 'material-ui/CircularProgress';
import Slider from './Common/Slider'

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
    borderLeft: '3px solid #f44336',
    margin: '10px 0'
  },
  thumb: {
    width: '100%',
    height: 'auto'
  }
};

export default class TopPlayList extends Component {
  static get propTypes() {
    return {
      topPlayListData: PropTypes.object,
      personalizedData: PropTypes.object,
      onFetchData: PropTypes.func,
      onFetchPersonalized: PropTypes.func,
      onFetchBannerData: PropTypes.func
    }
  }

  componentWillMount() {
    const { onFetchData, onFetchPersonalized, onFetchBannerData } = this.props;
    onFetchData();
    onFetchPersonalized();
    onFetchBannerData();
  }

  showLoading() {
    const { topPlayListData, personalizedData, onFetchBannerData } = this.props;
    const requests = [topPlayListData, personalizedData, onFetchBannerData]
      .map(resp => resp.status)
      .filter(status => status === ResponseStatus.REQUEST);
    return requests.length !== 0;
  }

  render() {
    const { topPlayListData: { playlists: items }, personalizedData: { result }, bannerData: { banners = [] } } = this.props;
    const showLoading = this.showLoading();
    return (
      <div>
        {
          showLoading && (
            <CircularProgress style={{
              position: 'absolute',
              margin: '20px auto',
              left: 0,
              right: 0
            }}/>
          )
        }
        {
          !showLoading && (
            <Slider auto={true} speed={3000}>
              {
                banners.map((obj, i) => {
                  const { url, pic, typeTitle } = obj;
                  const img = <img src={obj.pic} alt={typeTitle}/>;
                  return (
                    <div className="slider-item" key={`${i}`}>
                      {
                        url.length === 0 ? img : <a href={url}>{img}</a>
                      }
                    </div>
                  )
                })
              }
            </Slider>
          )
        }
        {
          !showLoading && (
            <div>
              <Subheader style={styles.subheader}>精品歌单</Subheader>
              <GridList
                className="personalized-data-list"
                style={styles.root}
              >
                {
                  result.map((obj) => {
                    const { id, name, copywriter, picUrl } = obj;
                    return (
                      <Link to={`/list/${id}`} key={id}>
                        <GridTile
                          className="grid-tile"
                          title={name}
                          subtitle={<span>by <b>{copywriter}</b></span>}
                          actionIcon={<IconButton><Headset color="white"/></IconButton>}
                        >
                          <img src={picUrl} alt={name} style={styles.thumb}/>
                        </GridTile>
                      </Link>
                    );
                  })
                }
              </GridList>
            </div>
          )
        }

      </div>)
  }
}