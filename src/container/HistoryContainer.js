import React, { Component } from 'react';

import History from '../components/History';

class HistoryContainer extends Component {
  render() {
    return (
      <History readArticles={this.props.readArticles} />
    );
  }
}

export default HistoryContainer;