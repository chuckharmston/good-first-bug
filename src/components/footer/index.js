import React, { Component } from 'react';

import './index.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <nav>
          <ul>
            <li className="footer--mozilla">
              <a href="https://www.mozilla.org/">Mozilla</a>
            </li>
            <li><a href="https://www.mozilla.org/about/legal/">Legal</a></li>
            <li>
              <a href="https://testpilot.firefox.com/about">About Test Pilot</a>
            </li>
            <li><a href="https://testpilot.firefox.com/privacy">Privacy</a></li>
            <li><a href="https://testpilot.firefox.com/terms">Terms</a></li>
            <li>
              <a href="https://www.mozilla.org/privacy/websites/#cookies">
                Cookies
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li className="footer--github">
              <a href="https://github.com/chuckharmston/testpilot-contribute">
                GitHub
              </a>
            </li>
            <li className="footer--twitter">
              <a href="https://twitter.com/fxtestpilot">Twitter</a>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}
