import React, { Component } from 'react';
import Utils from '../Utils';

class History extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let historyLocal = Utils.readSession('history');
    if(historyLocal){
      historyLocal = JSON.parse(historyLocal);
    }

    if(!historyLocal){
      return null
    }
    return (
      <ul className="list-group list-group-flush">
        {historyLocal.map((item, key) => (
          <li key={`history-${key}`} className="list-group-item">{item}</li>
          ))}
      </ul>
    );
  }
}

export default History;