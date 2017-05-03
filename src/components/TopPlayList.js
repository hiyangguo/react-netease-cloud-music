import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TopPlayList extends Component {
  static get propTypes() {
    return {
      fetchData: PropTypes.func
    }
  }

  componentWillMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    return (<div>Hello Word</div>)
  }
}