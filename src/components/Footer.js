import React, { PureComponent } from 'react';

const Footer = React.memo((props) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <ul className="list-inline text-center">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/pham.kenichi">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
          </ul>
          <p className="copyright text-muted">Copyright © Your Website 2019</p>
        </div>
      </div>
    </div>
  </footer>
));
export default Footer;