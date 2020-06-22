import React, { Component } from 'react';
// import {
//     ReactiveBase, DataSearch, MultiDataList, MultiList, SelectedFilters,
//     ResultCard, ToggleButton
// } from '@appbaseio/reactivesearch';
import './course.css';
import './windows.css';
//import index.css for global container
import '../../index.css';
// import MainTodoApp from '../Todo/MainTodoApp';
// import System from '../iframe/iframesystem';

//Navbar Component
import Navbar from '../Navbar';



class windows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toogleTopic: false,
      isClicked: false,
      message: "🔬Filter Hasil"
    };
  }

  // * For Handle Click Filter

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
      message: this.state.isClicked ? "🔬 Filter Hasil" : "🎬 Tunjukan Hasil"
    });
  }
  render() {
    return (
        <div id="window" className="window">
        <div className="icon-computer text-center" id="icon-computer" ondblclick="opencom()">
          <img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500505053/thumb_14339670430This_PC_fo5lbo.png" className="img-responsive" />
          <p>This PC</p>
        </div>
        <section className="option-box">
          <div className="color-box">
            <h4>All about Windows 10 Design</h4>
            {/*<video class="center-block" width="360" height="" controls>
                        <source src="img/myExplain_2.mp4" type="video/mp4">
                        <source src="img/myExplain_2.ogg" type="video/ogg">
                        Your browser does not support the video tag.
                </video>*/}
            <div style={{position: 'relative', height: 0, paddingBottom: '56.25%', width: '400px'}}><iframe src="https://www.youtube.com/embed/VUPtvK28fhY?ecver=2" style={{position: 'absolute', width: '100%', height: '100%', left: 0}} allowFullScreen width={640} height={360} frameBorder={0} /></div>
            <a className="btn btn-primary center-block text-center" onclick="openabout()">About Me</a>
          </div>
          <i className="fa fa-gear fa-3x gear-check" />
        </section>
        <div className="overlay-computer" id="overlay-computer">
          <div className="fluid-container">
            <div className="first-row-win" id="first-row-win">
              <div className="left">
                <i className="fa fa-hdd-o" />
                <i className="fa fa-file-o" />
                <i className="fa fa-folder" />
                <span>Front End</span>
              </div>
              <div className="right">
                <i className="fa fa-window-minimize" onclick="closeopencom()" />
                <i className="fa fa-window-restore" onclick="returncom()" id="returncam" style={{display: 'none'}} />
                <i className="fa fa-window-maximize" onclick="upercom()" id="upercam" />
                <i className="fa fa-times" onclick="closecom()" />
              </div>
              <div className="clearfix" />
            </div>
            <div className="second-row-win">
              <div>
                {/* Nav tabs */}
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="active"><a className="home-a" href="#home" aria-controls="home" role="tab" data-toggle="tab">File</a></li>
                  <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Home</a></li>
                  <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Share</a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">View</a></li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane active" id="home">
                    <div className="col-xs-1 text-center">
                      <i className="fa fa-envelope-open fa-2x" />
                      <p>Mail</p>
                    </div>
                    <div className="col-xs-1 text-center">
                      <i className="fa fa-file-code-o  fa-2x" />
                      <p>Code</p>
                    </div>
                    <div className="col-xs-1 text-center">
                      <i className="fa fa-sticky-note-o fa-2x" />
                      <p>Note</p>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div role="tabpanel" className="tab-pane" id="profile">
                    <div className="col-xs-1 text-center">
                      <i className="fa fa-user-circle fa-2x" />
                      <p>User</p>
                    </div>
                    <div className="col-xs-1 text-center">
                      <i className="fa fa-battery-4  fa-2x" />
                      <p>battery</p>
                    </div>
                    <div className="col-xs-1 text-center">
                      <i className="fa fa-book fa-2x" />
                      <p>Book</p>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div role="tabpanel" className="tab-pane" id="messages">
                    <div className="col-xs-1 text-center">
                      <i className="fa fa-car fa-2x" />
                      <p>Car</p>
                    </div>
                    <div className="col-xs-1 text-center">
                      <i className="fa fa-camera-retro  fa-2x" />
                      <p>cam</p>
                    </div>
                    <div className="col-xs-1 text-center">
                      <i className="fa fa-building fa-2x" />
                      <p>build</p>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div role="tabpanel" className="tab-pane" id="settings">
                    <div className="col-xs-1 text-center">
                      <i className="fa fa-cubes fa-2x" />
                      <p>cubes</p>
                    </div>
                    <div className="col-xs-1 text-center">
                      <i className="fa fa-coffee fa-2x" />
                      <p>coffee</p>
                    </div>
                    <div className="col-xs-1 text-center">
                      <i className="fa fa-film fa-2x" />
                      <p>film</p>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </div>
            <div className="third-row-win">
              <div className="col-xs-2">
                <i className="fa fa-long-arrow-left" />
                <i className="fa fa-long-arrow-right" />
                <i className="fa fa-chevron-down" />
                <i className="fa fa-arrow-up" />
              </div>
              <div className="col-xs-7">
                <div className="path-input">
                  <span className="path-icon-input">This pc</span>
                  <span className="path-icon-input">Mohamed Yahya (E:)</span>
                  <span className="path-icon-input">programming</span>
                  <span className="path-icon-input">Front End</span>
                </div>
                <i className="fa fa-hdd-o path-icon" />
                <i className="fa fa-repeat path-icon-1" />
                <i className="path-icon-2">|</i>
              </div>
              <div className="col-xs-3">
                <input className="search-input" type="text" placeholder="Search" />
                <i className="fa fa-search path-icon-1" />
              </div>
              <div className="clearfix" />
            </div>
            <div className="fourd-row-win">
              <div className="col-xs-3" style={{borderRight: '1px solid #808080'}}>
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <span className="fa fa-star">Quick access</span>
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                      <div className="panel-body">
                        <p><span className="fa fa-desktop">Desktop</span></p>
                        <p><span className="fa fa-download">Downloads</span></p>
                        <p><span className="fa fa-file-text">documents</span></p>
                        <p><span className="fa fa-picture-o ">Picture</span></p>
                        <p><span className="fa fa-folder ">Folder</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <span className="fa fa-folder-open">Creative Cloud</span>
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                        <p><span className="fa fa-desktop">Desktop</span></p>
                        <p><span className="fa fa-download">Downloads</span></p>
                        <p><span className="fa fa-file-text">documents</span></p>
                        <p><span className="fa fa-picture-o ">Picture</span></p>
                        <p><span className="fa fa-folder ">Folder</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <span className="fa fa-desktop">This PC</span>
                        </a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                      <div className="panel-body">
                        <p><span className="fa fa-desktop">Desktop</span></p>
                        <p><span className="fa fa-download">Downloads</span></p>
                        <p><span className="fa fa-file-text">documents</span></p>
                        <p><span className="fa fa-picture-o ">Picture</span></p>
                        <p><span className="fa fa-folder ">Folder</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-9 ">
                <div className="row main-folders">
                  <div className="col-xs-2 folders text-center" ondblclick="openimg()">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503391/admin-3_yilprt.jpg" className="img-responsive  center-block" alt="" /></p>
                    <span>Photo</span>
                  </div>
                  <div className="col-xs-2 folders text-center" ondblclick="openvid()">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500505068/myposter_vlaggb.png" className="img-responsive  center-block" alt="" /></p>
                    <span>Video</span>
                  </div>
                  <div className="col-xs-2 folders text-center" ondblclick="opennote()">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500505134/if_sticky-note_299111_px7waa.png" className="img-responsive  center-block" alt="" /></p>
                    <span>Note</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="col-xs-2 folders text-center">
                    <p className="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" className="img-responsive  center-block" style={{height: '64px'}} alt="" /></p>
                    <span>Folder</span>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="fived-row-win" />
          </div>
          <div className="resizer" />
        </div>
        <div className="clearfix" />
        <div className="image-overlay" id="image-overlay">
          <div className="fluid-container">
            <div className="first-row-img">
              <span className="center-text head-over">My Image</span>
              <div className="right">
                <i className="fa fa-times" onclick="closeimg()" />
              </div>
              <div className="clearfix" />
            </div>
            <div className="second-row-img">
              <img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503391/admin-3_yilprt.jpg" className="center-block img-responsive" style={{height: '80vh'}} alt="" />
            </div>
          </div>
        </div>
        <div className="video-overlay" id="video-overlay">
          <div className="fluid-container">
            <div className="first-row-vid">
              <span className="center-text head-over">My Video</span>
              <div className="right">
                <i className="fa fa-times" onclick="closevid()" />
              </div>
              <div className="clearfix" />
            </div>
            <div className="second-row-vid">
              {/*<video class="center-block" width="" height="" controls>
                            <source src="img/myExplain_2.mp4" type="video/mp4">
                            <source src="img/myExplain_2.ogg" type="video/ogg">
                            Your browser does not support the video tag.
                    </video>*/}
              <div style={{position: 'relative', height: 0, paddingBottom: '56.25%'}}><iframe src="https://www.youtube.com/embed/VUPtvK28fhY?ecver=2" style={{position: 'absolute', width: '50%', height: '50vh', left: '25%'}} allowFullScreen width={640} height={360} frameBorder={0} /></div>
            </div>
          </div>
        </div>
        <div className="note-overlay" id="note-overlay">
          <div className="fluid-container">
            <div className="first-row-note">
              <span className="center-text head-over">My Note</span>
              <div className="right">
                <i className="fa fa-times" onclick="closenote()" />
              </div>
              <div className="clearfix" />
            </div>
            <div className="second-row-note">
              <textarea defaultValue={""} />
            </div>
          </div>
        </div>
        <div className="about-overlay" id="about-overlay">
          <div className="fluid-container">
            <div className="first-row-img">
              <span className="center-text head-over">Info about me</span>
              <div className="right">
                <i className="fa fa-times" onclick="closeabout()" />
              </div>
              <div className="clearfix" />
            </div>
            <div className="second-row-abo">
              <div>
                <img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503802/admin-2_qxjnab.jpg" className="img-responsive" alt="" />
                <p>
                  Hi, My name is Mohamed Yahya From Egypt :( . <br /> I'am 17 Years old. <br /> I'am a Programmer web (Front End). <br /> My Number: 20+ <mark>01061578345</mark>. <br /> And you can Call Me From <a href="https://goo.gl/B56o1U">Here</a> <br />                        I love computer, technology and programming <br /> I was learning programming languages. <br /> The best language for me is JavaScript. <br /> I use Javascript instead of jQuery. <br /> That's why I'm strong in Javascript.
                  <br /> The most loved thing in programming is often the challenge. <br /> I am capable of Html, Html 5, Css, Css3, Javascript <br /> Thanks for your time <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="start-window-fade hidden-start" id="start-window-fade" />
        <div className="start-window hidden-start" id="start-window">
          <div className="fluid-container" id="container-start">
            <div className="row">
              <div className="col-xs-1 first-column">
                <div className="icon-bottom" id="power" onclick="powerOff()">
                  <i className="fa fa-power-off fa-1x" />
                </div>
                <div className="icon-bottom">
                  <i className="fa fa-cog fa-1x" />
                </div>
                <div className="icon-bottom">
                  <i className="fa fa-folder-open-o fa-1x" />
                </div>
                <div className="icon-bottom">
                  <i className="fa fa-user fa-1x" />
                </div>
                <div className="icon-bottom open-icon-list">
                  <i className="fa fa-bars fa-1x" />
                </div>
              </div>
              <div className="col-xs-3 second-column">
                <div className="wrap-scroll">
                  <div className="head-med">
                    <small>What I'am Used</small>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503397/HTML_Logo_jkkttu.png" alt="..." width={35} height={35} />
                      </a>
                    </div>
                    <div className="media-body">
                      <small className="media-heading">Html, Html 5</small>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503385/8b61de4c84033266e15317a6eb9fda2d-css3_cmaqgi.png" alt="..." width={35} height={35} />
                      </a>
                    </div>
                    <div className="media-body">
                      <small className="media-heading">Css, Css 3</small>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503920/Javascript-shield_grysg1.png" alt="..." width={35} height={35} />
                      </a>
                    </div>
                    <div className="media-body">
                      <small className="media-heading">Pure JavaScript</small>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503388/bootstrap-4_qmy2lh.svg" alt="..." width={35} height={35} />
                      </a>
                    </div>
                    <div className="media-body">
                      <small className="media-heading">Bootstrap</small>
                    </div>
                  </div>
                  <div className="head-med mouse-prient">
                    <small>Expand <i className="fa fa-chevron-down fa-1x" /></small>
                  </div>
                  <div className="head-med">
                    <small>Tools used</small>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504015/winicon_mj7eiz.png" alt="..." width={35} height={35} />
                      </a>
                    </div>
                    <div className="media-body">
                      <small className="media-heading">Windows 10</small>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504055/Firefox_ivwjwz.png" alt="..." width={35} height={35} />
                      </a>
                    </div>
                    <div className="media-body">
                      <small className="media-heading">Firefox</small>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503390/chrome1600_okfqm6.png" alt="..." width={35} height={35} />
                      </a>
                    </div>
                    <div className="media-body">
                      <small className="media-heading">chrome</small>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504144/favicon_mmggme.ico" alt="..." width={35} height={35} />
                      </a>
                    </div>
                    <div className="media-body">
                      <small className="media-heading">Visual Studio Code</small>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504181/Photoshop_CC_icon_gyvgzg.png" alt="..." width={35} height={35} />
                      </a>
                    </div>
                    <div className="media-body">
                      <small className="media-heading">Photoshop cc 2017</small>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504215/illustrator_qgskie.png" alt="..." width={35} height={35} />
                      </a>
                    </div>
                    <div className="media-body">
                      <small className="media-heading">illustrator cc 2017</small>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503401/github-desktop-icon_zzzpbq.png" alt="..." width={35} height={35} />
                      </a>
                    </div>
                    <div className="media-body">
                      <small className="media-heading">github</small>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504321/codepen1600_rd1mh7.png" alt="..." width={35} height={35} />
                      </a>
                    </div>
                    <div className="media-body">
                      <small className="media-heading">Codepen</small>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503387/BeSJ3aet_400x400_hg4g6p.png" alt="..." width={35} height={35} />
                      </a>
                    </div>
                    <div className="media-body">
                      <small className="media-heading">Upwork</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-4 third-column">
                <div className="head-box">
                  <small>Life at a glance</small>
                </div>
                <div className="row">
                  <div className="col-xs-8 col-xs-push-4 box">
                    <div className="box-style">
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-envelope fa-2x" />
                      </div>
                      <div>
                        Mail
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 col-xs-pull-8 box">
                    <div className="box-style text-center">
                      <div className="mycontainer">
                        <div id="day">day</div>
                        <div id="number-day">number</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-8 box">
                    <div className="box-style">
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-internet-explorer fa-2x" />
                      </div>
                      <div>
                        Microsoft Edge
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 box">
                    <div className="box-style">
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-picture-o fa-2x" />
                      </div>
                      <div>
                        Picture
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 box">
                    <div className="box-style">
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-sun-o fa-2x" />
                      </div>
                      <div>
                        Weather
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 box">
                    <div className="box-style">
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-laptop fa-2x" />
                      </div>
                      <div>
                        User
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 box">
                    <div className="box-style" style={{background: 'url("http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503397/admin_uo6a4w.jpg")', backgroundSize: 'cover'}}>
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-twitter fa-2x" style={{color: 'rgba(0,0,0,0)'}} />
                      </div>
                      <div>
                        twitter <i className="fa fa-twitter" style={{float: 'right', lineHeight: '21px'}} />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 box">
                    <div className="box-style">
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-shopping-bag  fa-2x" />
                      </div>
                      <div>
                        store
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 box">
                    <div className="box-style">
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-skype  fa-2x" />
                      </div>
                      <div>
                        skype
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 box">
                    <div className="box-style text-center" style={{background: 'url("http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504440/king-care_ccxidf.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-twitter fa-2x" style={{color: 'rgba(0,0,0,0)'}} />
                      </div>
                      <div style={{fontSize: '10px'}}>
                        Candy Crush
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="head-box">
                  <small>Play And Explore</small>
                </div>
                <div className="row">
                  <div className="col-xs-4 box">
                    <div className="box-style" style={{background: 'url("http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504485/logo_jgngah.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-twitter fa-2x" style={{color: 'rgba(0,0,0,0)'}} />
                      </div>
                      <div style={{fontSize: '10px'}}>
                        Xbox
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 box">
                    <div className="box-style">
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-music fa-2x" />
                      </div>
                      <div style={{fontSize: '10px'}}>
                        Music
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 box">
                    <div className="box-style">
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-film fa-2x" />
                      </div>
                      <div style={{fontSize: '10px'}}>
                        Film
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 box">
                    <div className="box-style" style={{background: 'url("http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504540/microsoft-solitaire-collection-02-535x535_bactpx.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-twitter fa-2x" style={{color: 'rgba(0,0,0,0)'}} />
                      </div>
                      <div style={{fontSize: '10px'}}>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 box">
                    <div className="box-style" style={{background: 'url("http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504576/1200x630bb_juslti.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-twitter fa-2x" style={{color: 'rgba(0,0,0,0)'}} />
                      </div>
                      <div style={{fontSize: '10px'}}>
                        minecraft
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 box">
                    <div className="box-style" style={{background: 'url("http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504589/shortcut-icon-180-393c2144_lifwjy.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-twitter fa-2x" style={{color: 'rgba(0,0,0,0)'}} />
                      </div>
                      <div style={{fontSize: '10px'}}>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-8 col-xs-push-4 box">
                    <div className="box-style" style={{background: 'url("http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503395/bank_cf8dgr.jpg")', backgroundSize: '130%', backgroundPosition: 'center'}}>
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-twitter fa-2x" style={{color: 'rgba(0,0,0,0)'}} />
                      </div>
                      <div>
                        News
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 col-xs-pull-8 box">
                    <div className="box-style" style={{background: 'url("http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504662/maxresdefault_live_bwb3qd.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-twitter fa-2x" style={{color: 'rgba(0,0,0,0)'}} />
                      </div>
                      <div>
                        Money
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 box">
                    <div className="box-style" style={{background: 'url("http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504684/unnamed_is6kxn.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-twitter fa-2x" style={{color: 'rgba(0,0,0,0)'}} />
                      </div>
                      <div style={{fontSize: '10px'}}>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 box">
                    <div className="box-style" style={{background: 'url("http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503787/onenote-amazon-app-store-100361701-large_m6lbsu.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-twitter fa-2x" style={{color: 'rgba(0,0,0,0)'}} />
                      </div>
                      <div style={{fontSize: '12px'}}>
                        OneNote
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 box">
                    <div className="box-style" style={{background: 'url("http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504701/office2016logo_uw8zcd.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                      <div className="icon-bottom text-center" style={{margin: '20px'}}>
                        <i className="fa fa-twitter fa-2x" style={{color: 'rgba(0,0,0,0)'}} />
                      </div>
                      <div style={{fontSize: '10px'}}>
                        Office
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="nav navbar-inverse navbar-fixed-bottom footer text-center">
          <div className="fluid-container">
            <div className="row">
              <div className="left">
                <div className="col-xs-1-me">
                  <div className="icon-bottom strat-win" id="strat-win">
                    <i className="fa fa-windows fa-2x" />
                  </div>
                </div>
                <div className="col-xs-1-me">
                  <div className="icon-bottom">
                    <i className="fa fa-search fa-2x" />
                  </div>
                </div>
                <div className="col-xs-1-me">
                  <div className="icon-bottom">
                    <i className="fa fa-envelope fa-2x" />
                  </div>
                </div>
                <div className="col-xs-1-me" id="a1">
                  <div className="icon-bottom">
                    <i className="fa fa-folder fa-2x" />
                  </div>
                </div>
                <div className="col-xs-1-me" id="a2">
                  <div className="icon-bottom">
                    <i className="fa fa-picture-o fa-2x" />
                  </div>
                </div>
                <div className="col-xs-1-me" id="a3">
                  <div className="icon-bottom">
                    <i className="fa fa-film fa-2x" />
                  </div>
                </div>
                <div className="col-xs-1-me" id="a4">
                  <div className="icon-bottom">
                    <i className="fa fa-file-text-o fa-2x" />
                  </div>
                </div>
                <div className="col-xs-1-me" id="a5">
                  <div className="icon-bottom">
                    <i className="fa fa-id-card fa-2x" />
                  </div>
                </div>
                <span className=".clearfix" />
              </div>
              <div className="right">
                <div className="col-xs-1-me" id="close-all">
                </div>
                <div className="col-xs-1-me">
                  <div className="icon-bottom">
                    <i className="fa fa-bell fa-2x" />
                  </div>
                </div>
                <div className="date col-xs-1-me">
                  <span id="time">00:00</span>
                  <span id="history">00/00/0000</span>
                </div>
                <div className="col-xs-1-me">
                  <div className="icon-bottom">
                    <i className="fa fa-volume-up  fa-2x" />
                  </div>
                </div>
                <div className="col-xs-1-me">
                  <div className="icon-bottom">
                    <i className="fa fa-chevron-up fa-2x" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default windows;
