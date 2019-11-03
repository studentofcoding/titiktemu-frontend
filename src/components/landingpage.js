import React, { Component } from 'react';
import './landingpage.css';
// import '../index.css';
import { NavLink } from 'react-router-dom';

class landingpage extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         isAccesswithMobile: false,
    //         message: "Please access with Computer or Laptop, Thank you!"
    //     };
    // }

    render() {
        return (
        // <div className=
        //     {
        //     this.state.isAccesswithDesktop ?
        //     "landingpage" : "mobile-detected"
        //     }
        // >
        <div className="landingpage">
            <div className="container-width">
                <div className="clearfix" />
                <div className="row" id="iv38q6">
                <div className="cell" id="ii87nh">
                    <img
                        className = "BG-landing"
                        src="Images/Landingpage.png"
                        alt="landing-titiktumbuh"
                    />
                </div>
                <div className="cell" id="iybx47">
                    <div className="landing_title">
                        "The Internet is our Playground"
                        {/* <p className="landing_sub-title">
                            Temukan, Diskusikan, dan
                            Bangun Passionmu
                        </p> */}
                        <p className="landing_sub-title">
                            Made for Self-starter, and Self-learner
                            like you
                        </p>
                    </div>
                    <div className="button-row">
                        <div id="l1">
                            <NavLink className="login-btn" style={{display: 'block', height: '100%'}} to="/login">Login</NavLink>
                        </div>
                        <div id="s1">
                            <NavLink className="signup-btn" style={{display: 'block', height: '100%'}} to="/register">Sign me up!</NavLink>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        )
    }
}

export default landingpage;