import React, { PureComponent } from 'react';
import Utils from '../Utils';

class History extends PureComponent {
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
          <li key={`history-${key}`} className="list-group-item"><a href={item.url} target="_blank" rel="noopener noreferrer" title={item.title}>{item.title}</a></li>
          ))}
      </ul>
    );
  }
}

export default History;