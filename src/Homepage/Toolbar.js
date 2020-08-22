import React from "react";
import './Toolbar.css';

const toolbar = () => {
  return (
    <div className="Toolbar pure-g">
      <div className="menu-left pure-menu pure-menu-horizontal">
        <div className="pure-u-1-2">
          <h1 className="pure-menu-heading">Louise Spiers</h1>
          <h3>Software Developer</h3>
        </div>
        <div className="menu-right pure-u-1-2">
          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <a
                href="https://github.com/witterless"
                className="pure-menu-link"
              >
                <i className="fab fa-github fa-2x"/>
              </a>
            </li>
            <li className="pure-menu-item">
              <a
                href="https://www.linkedin.com/in/louise-spiers/"
                className="pure-menu-link"
              >
                <i className="fab fa-linkedin fa-2x"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default toolbar;
