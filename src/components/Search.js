import React, { PureComponent } from 'react';
import {debounce} from 'throttle-debounce';

class Search extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      keyword : ''
    }
    this.handleChange = this.handleChange.bind();
    this.sendRequest = debounce(500, this.sendRequest);
  }

  componentDidMount(){
    if(this.props.keyword){
      this.setState({
        keyword : this.props.keyword
      })
    }
  }

  sendRequest = (keyword) => {
    this.props.handleSearch(keyword);
  }

  handleChange = (e) => {
    const keyword = e.target.value;
    this.setState({
      keyword
    },() => {
      this.sendRequest(this.state.keyword)
    })
  }
  render() {
    return (
      <div className="form form-inline">
        <div className="form-group input-group">
          <input className="form-control" name="keyword" value={this.state.keyword} placeholder="Search article" onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default Search;