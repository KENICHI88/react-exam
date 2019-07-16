import React, { Component } from 'react';
/////
import Paging from './Paging';
import Utils from '../Utils';
/////

class HomeContent extends Component {

  constructor(props){
    super(props);
    this.addToHistory = this.addToHistory.bind();
  }

  addToHistory = (event, item) => {
    event.preventDefault();
    this.props.addToHistory({
      title : item.title,
      url: item.url
    }, () => {
      let historyLocal = Utils.readSession('history');
      if(historyLocal){
        historyLocal = JSON.parse(historyLocal);
      }else {
        historyLocal = [];
      }
      if(!Utils.isExistHistory(item.url, historyLocal)){
        historyLocal.unshift(item);
      }
      Utils.createSession('history', JSON.stringify(historyLocal));
      window.open(item.url, '_blank');
      window.focus();
      
    })
  }

  render() {
    if(!this.props.listArticle){
      return null;
    }

    const {listArticle, totalPage, activePage} = this.props;
    return (
      <>
        {listArticle && listArticle.map((item, ind) => (
          <div key={'item-'+ind}>
            <div className="post-preview">
              <div className="img-thumbnail">
                <img className="img-fluid w-100" src={item.urlToImage} alt={item.title}/>
              </div>
              <a title={item.title} href={item.url} onClick={(event) => this.addToHistory(event, item)}>
                <h2 className="post-title">{item.title}</h2>
                <h3 className="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3>
              </a>
              <p className="post-meta">Posted by {item.author} on {item.publishedAt}</p>
            </div>
            <hr />
          </div>
        ))}
        
        <Paging 
          total={totalPage}
          current={activePage}
          requestArticleByPage={this.props.requestArticleByPage}
        />
      </>
    );
  }
}

export default HomeContent;