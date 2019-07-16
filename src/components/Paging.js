import React, { Component } from 'react';

class Paging extends Component {
  constructor(props){
    super(props);
    this.requestArticleByPage = this.requestArticleByPage.bind();
  }
  requestArticleByPage = (page)=> {
    this.props.requestArticleByPage(page);
  }
  renderPaging = (pages, current)=>{
    let i = 1,
        rs = [],
        length = 10;
    if(pages > 10){
      if(current>4) {
        i= current -4;
        length = current+5;
      }
      
      while(i <= length && i < pages){
        let cur = i;
        if(i === current){
          rs.push(<li key={`paging-${i}`} className="page-item active" aria-current="page"><span className="page-link">{cur}<span className="sr-only">(current)</span></span></li>)
        }else {
          rs.push(<li key={`paging-${i}`} className="page-item"><button className="page-link" onClick={() => this.requestArticleByPage(cur)}>{cur}</button></li>)
        }
        i++;
      }
      
    }else {
      while(i <= pages){
        let cur = i;
        if(i === current){
          rs.push(<li key={`paging-${i}`} className="page-item active" aria-current="page"><span className="page-link">{i}<span className="sr-only">(current)</span></span></li>)
        }else {
          rs.push(<li key={`paging-${i}`} className="page-item"><button className="page-link" onClick={() => this.requestArticleByPage(cur)}>{i}</button></li>)
        }
        i++;
      }
    }
    return rs;
  }
  render() {
    const {total, current} = this.props;
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li> */}
          {this.renderPaging(total, current)}
          {/* <li className="page-item"><a className="page-link" href="#">Next</a></li> */}
        </ul>
      </nav>

    );
  }
}

export default Paging;