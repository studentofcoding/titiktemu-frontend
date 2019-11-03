import React, { Component } from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class home extends Component {
    render() {
        return (
            <div className="home-container">
              <div className="home-cell" id="h1">
                <div className="content-container">
                  <img
                    className="BG-home"
                    src="Images/Production-Paper.png"
                    alt="BG-Paper"
                  />
                </div>
                <h1 className="home-desc">Bost your knowledge and find your acedemical needs</h1>
                <NavLink exact to="/paper">
                  <Button className="Paper">
                    Search your paper here
                  </Button>
                </NavLink>
              </div>
              <div className="home-cell" id="h2">
                <div className="content-container">
                  <img
                    className="BG-home"
                    src="Images/Production-Course.png"
                    alt="BG-Paper"
                  />
                </div>
                <h1 className="home-desc">Find your passion and explore your curiosity</h1>
                <NavLink exact to="/course">
                  <Button className="Course">
                    Search your course here 
                  </Button>
                </NavLink>
                {/* <NavLink exact to="/mongo">
                  <Button className="Mongo">
                    Test Mongo
                  </Button>
                </NavLink> */}
              </div>
          </div>
        )
    }
}

export default home;