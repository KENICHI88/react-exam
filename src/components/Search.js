import React, { PureComponent } from 'react';
import {debounce} from 'throttle-debounce';
import { withRouter } from "react-router";

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
    const { location } = this.props;
    if(location.pathname !=='/'){
      return null;
    }
    return (
      <div  className="container">
        <div className="row">
          <div className="col-sm-2">
            <label>Search here</label>
          </div>
          <div className="col-sm-10">
          <div className="form form-inline">
              <div className="form-group input-group">
                <input className="form-control" name="keyword" value={this.state.keyword} placeholder="Search article" onChange={this.handleChange}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default withRouter(Search);