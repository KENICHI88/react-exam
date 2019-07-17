import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import MainContainer from './container/MainContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
////
import * as Constants from './Constants';
import axios from 'axios';
import Loading from './components/Loading';

import Search from './components/Search';
////
import {debounce} from 'throttle-debounce';
import History from './components/History';
class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      listArticle : [],
      total : 0,
      itemPerPage : 4,
      activePage: 1,
      readArticles: [],
      loading: true,
      keyword : '',
    }
    this.getArticles = this.getArticles.bind();
    this.handleSearch = this.handleSearch.bind();
    this.sendRequest = debounce(500, this.sendRequest);

    this.scrollIntoView = this.scrollIntoView.bind();

    this.refEle = React.createRef();
  }

  componentDidMount(){
    const articleList =  this.getArticles();
    articleList.then(rs => {
      if(rs.data){
        this.setState({
          loading: false,
          listArticle : rs.data.articles,
          total : rs.data.totalResults
        })
      }
    })
    .catch(error => console.log(error));
  }

  getArticles = () => {
    let query = [];
    if(this.state.keyword){
      query.push('q='+ encodeURI(this.state.keyword));
    }
    query.push('pageSize='+this.state.itemPerPage);
    query.push('page='+(this.state.activePage));
    query.push('domains='+(Constants.domain));
    query.push(Constants.API_key);
    const url = Constants.API_host + 'everything?' + query.join('&');
    return  axios.get(url);
  }

  requestArticleByPage = (page)=>{
    this.setState({
      activePage: (page)
    }, ()=> {
      const articleList = this.getArticles();
      articleList.then(rs => {
        if(rs.data){
          this.scrollIntoView();
          this.setState({
            loading: false,
            listArticle : rs.data.articles,
            total : rs.data.totalResults
          })
        }
      })
      .catch(error => console.log(error));
    })
  }

  addToHistory = (item, cb) => {
    const readArticles = this.state.readArticles;
    readArticles.push(item);
    this.setState({
      readArticles
    }, () => {
      if(cb && typeof cb === 'function'){
        cb();
      }
    })
  }
  sendRequest = () =>{
    const articleList =  this.getArticles();
    articleList.then(rs => {
      if(rs.data){
        this.setState({
          loading: false,
          listArticle : rs.data.articles,
          total : rs.data.totalResults
        })
      }
    })
    .catch(error => console.log(error));
  }
  handleSearch = (keyword) => {
    this.setState({
      keyword,
      loading: true,
      activePage: 1
    }, () => {
      this.sendRequest();
    })
  }
  scrollIntoView = () => {
    this.refEle.current.scrollIntoView({
      behavior: 'smooth',
      block : 'start'
    })
  }
  render(){
    return (
      <Router>
        <Header />
        <Banner />
        <div ref={this.refEle}>
          <Search 
            handleSearch={this.handleSearch}
            keyword={this.state.keyword}
          />
        </div>
        <div className="container">
          <div className="row">
            {this.state.loading ? (<div className="col-12"><Loading /></div>) : (
              <Switch>
                <Route exact path="/" component={()=> (
                  <div className="col-12">
                      <MainContainer
                      listArticle={this.state.listArticle}
                      addToHistory={this.addToHistory}
                      readArticles={this.state.readArticles}
                      totalPage={Math.ceil(this.state.total/this.state.itemPerPage)}
                      activePage={this.state.activePage}
                      itemPerPage={this.state.itemPerPage}
                      requestArticleByPage={this.requestArticleByPage}
                    />
                  </div>
                )} />
                <Route
                  path="/history"
                  component={()=> (
                    <div className="col-10">
                      <h2>History</h2>
                      <History />
                    </div>
                  )}
                />
              </Switch>
            )}
            
          </div>
        </div>
        <hr />
        <Footer />
      </Router>
    )
  };
}

export default App;