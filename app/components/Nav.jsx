import React, { createClass } from 'react';
import { Link } from 'react-router-dom';

const Nav = createClass({
    displayName: 'Nav',

    render() {
        return (
            <header className="page-header">
              <nav>
                  <div className="nav-wrapper light-blue darken-4">
                      <a href="#!" className="brand-logo">Portfolio</a>
                      <a href="#" data-activates="mobile-view" className="button-collapse">
                          <i className="material-icons">Menu</i>
                      </a>
                      <ul className="right hide-on-med-and-down">
                          <li><a>Home</a></li>
                      </ul>
                      <ul className="side-nav" id="mobile-view">
                          <li><a>Home</a></li>
                      </ul>
                  </div>
              </nav>
            </header>
        );
    }
});

export default Nav;
