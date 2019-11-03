import React, {Component} from "react";
import ReactDOM from 'react-dom';

const Landing_Page = () => {
        return (
            <div className="master-wrapper">

                <div className="preloader">
                    <div className="preloader-img">
                        <span className="loading-animation animate-flicker"><img src="assets/images/loading.gif" alt="loading" /></span>
                    </div>
                </div>

                <div className="nav-wrapper smoothie">  
                    <div className="container">      
                        <div className="row">
                            <div className="col-xs-3">
                                <a className="logo" href="#"><img alt="" className="logo img-responsive" src="assets/images/logo-light.png"></img></a> 
                            </div>
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false" aria-controls="navbar">
                                  <span className="sr-only">Toggle navigation</span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                            </button>
                            <div className="col-xs-9">
                                <div className="collapse navbar-collapse" id="navbar-collapse-1">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="#about-us" className="page-scroll">About Us</a></li>
                                        <li><a href="#the-band" className="page-scroll">The Band</a></li>
                                        <li><a href="#upcoming-gigs" className="page-scroll">Gigs</a></li>
                                        <li><a href="#latest-releases" className="page-scroll">Releases</a></li>
                                        <li><a href="#the-gallery" className="page-scroll">Gallery</a></li>
                                        <li><a href="#contact-us" className="page-scroll">Bookings</a></li>
                                    </ul>
                                </div>                        
                            </div>
                        </div>
                    </div>
                </div>
                
                <header id="home" className="fullheight">
                    <div id="BigVideo" className="player" data-property="{videoURL:'https://www.youtube.com/watch?v=bNmZ_Qaelac', containment:'#home', autoPlay:true, mute:true, opacity:1, showControls : false, startAt: 30}"></div> 
                    <div className="dark-overlay half-opacity fullheight">
                        <div className="container fullheight">                   
                            <div className="jumbotron">
                                <h1><small>We Are</small><br>
                                Rock and Roll</br></h1>
                                <p>
                                    <a className="btn btn-white btn-lg page-scroll" href="#about-us" role="button">About Us</a> 
                                    <a className="btn btn-lg btn-primary page-scroll" href="#latest-releases" role="button">Buy Tunes</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                <footer>
                    <div className="container">
                        <div className="row">                
                            <div className="col-md-12 footer-social text-center mb40">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-yelp"></i></a>          
                            </div>
                            <div className="col-md-12 text-center">
                                <p className="copyright"><small>© 2019. Designed and Developed by <a href="http://www.distinctivethemes.com" target="_blank">Distinctive Themes</a></small></p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
    );
}

export default Landing_Page;

