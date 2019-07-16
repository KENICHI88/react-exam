import React, { PureComponent } from 'react';

class Banner extends PureComponent {
  render() {
    return (
      <header className="masthead" style={{backgroundImage: 'url("img/home-bg.jpg")'}}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Demo</h1>
                <span className="subheading">Get data from API</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Banner;