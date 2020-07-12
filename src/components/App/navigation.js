import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <ul>
        <NavLink exact to="/">
          <li>
            <div id="dashboardIcon">
              <i className="fas fa-door-open"></i>
            </div>
          </li>
        </NavLink>
        <NavLink exact to="/chat">
          <li>
            <div id="forumIcon">
              <i className="fab fa-forumbee"></i>
            </div>
          </li>
        </NavLink>
        <li>
          <div id="forumIcon">
            <i className="fas fa-bullhorn"></i>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Navigation;