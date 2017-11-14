import React, { createClass } from 'react';
import { Link } from 'react-router-dom';

const Footer = createClass({
    displayName: 'Footer',

    render() {
        return (
            <footer className="page-footer center-align light-blue darken-4">
                    <div className="footer-copyright">
                        <div className="container center-align">
                            Copyright &copy; &nbsp;
                            <a className="grey-text text-lighten-4" href="http://santoshshinde.com/">Santosh Shinde</a>
                            &nbsp; 2017. All Rights Reserved
                        </div>
                    </div>
                    <div className="container">
                      <div className="row">
                          <div className="col l6 s12">
                              <h5 className="white-text">About the Site</h5>
                              <p className="grey-text text-lighten-4">This is my personal portfolio, if you have any questiosn or suggestions feel free to contact me. This was created using React and Materialize.</p>
                          </div>
                          <div className="col l4 offset-l2 s12">
                              <h5 className="white-text">Contact Me</h5>
                              <div className="col s6">
                                  <ul className="white-text">
                                      <li>
                                          <a href="mailto:sanshinde2012@gmail.com">
                                              <i className="fa fa-envelope fa-fw"></i>
                                          </a>&nbsp; E-Mail
                                      </li>
                                      <li>
                                          <a href="https://github.com/santoshshinde2012" target='_blank'>
                                              <i className="fa fa-github fa-fw"></i>
                                          </a>&nbsp; Github
                                      </li>
                                      <li>
                                          <a href="https://www.linkedin.com/in/santosh-shinde-54454635" target='_blank'>
                                              <i className="fa fa-linkedin"></i>
                                          </a>&nbsp; LinkedIn
                                      </li>
                                  </ul>
                              </div>
                              <div className="col s6">
                                  <ul className="white-text">
                                      <li>
                                          <a href="https://codepen.io/santoshshinde2012" target='_blank'>
                                              <i className="fa fa-codepen"></i>
                                          </a>&nbsp; Codepen
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                   </div>
            </footer>
        );
    }
});

export default Footer;
