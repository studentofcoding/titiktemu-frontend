import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';

import DashboardApp from './AppIcon/dashboard'
import ForumApp from './AppIcon/forum';
import TimelineApp from './AppIcon/timeline';

import { NavLink } from 'react-router-dom';

import './chat.css';

const Chat = ({ currentUser, currentChannel, isPrivateChannel, topPosters }) => (
    <div id="home">
        <div className="scroll-left">
            <p>1. Lorem Culpa duis exercitation est deserunt mollit deserunt enim non nostrud dolore nisi proident. 2. Lorem Culpa duis exercitation est deserunt mollit deserunt enim non nostrud dolore nisi proident.
            </p>
        </div>
        <section>
            <div className="body-container">
                <Grid
                    columns="equal"
                    className="inner-container"
                    >
                    {/* <ColorPanel
                        key={currentUser && currentUser.name}
                        currentUser={currentUser}
                    /> */}
                    <SidePanel
                        key={currentUser && currentUser.uid} 
                        currentUser={currentUser} 
                    />

                    <Grid.Column className={"chat-column"}>
                        <Messages
                            key={currentChannel && currentChannel.id}
                            currentChannel={currentChannel}
                            currentUser={currentUser}
                            isPrivateChannel={isPrivateChannel}
                        />
                    </Grid.Column>
                    
                    <Grid.Column width={4}>
                        <MetaPanel
                            key={currentChannel && currentChannel.name}
                            topPosters={topPosters}
                            currentChannel={currentChannel}
                            isPrivateChannel={isPrivateChannel}
                        />
                    </Grid.Column>
                </Grid>
            </div>
            <div className="nav-app">
                <ul>
                <NavLink exact to="/">
                    <li>
                    <DashboardApp/>
                    </li>
                </NavLink>
                <NavLink exact to="/chat">
                    <li>
                    <ForumApp/>
                    </li>
                </NavLink>
                <li>
                    <TimelineApp/>
                </li>
                </ul>
            </div>
        </section>
    </div>
    
    // <div>
    //     <div>
    //         {/* <Navbar/> */}
    //         <Grid
    //             columns="equal"
    //             className="chat"
    //             style={
    //             {
    //                 background: "#fff"
    //             }
    //             }>
    //             <ColorPanel
    //                 key={currentUser && currentUser.name}
    //                 currentUser={currentUser}
    //             />
    //             <SidePanel key={currentUser && currentUser.uid} currentUser={currentUser} />

    //             <Grid.Column className={"chat-column"} style={{ marginLeft: 320, marginTop: 20 }}>
    //                 <Messages
    //                     key={currentChannel && currentChannel.id}
    //                     currentChannel={currentChannel}
    //                     currentUser={currentUser}
    //                     isPrivateChannel={isPrivateChannel}
    //                 />
    //             </Grid.Column>
                
    //             <Grid.Column width={4}>
    //                 <MetaPanel
    //                     key={currentChannel && currentChannel.name}
    //                     topPosters={topPosters}
    //                     currentChannel={currentChannel}
    //                     isPrivateChannel={isPrivateChannel}
    //                 />
    //             </Grid.Column>
    //         </Grid>
    //     </div>
    //     {/* <Navbarmobile /> */}
    // </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    currentChannel: state.channel.currentChannel,
    isPrivateChannel: state.channel.isPrivateChannel,
    topPosters: state.channel.topPosters
});
 
export default connect(mapStateToProps)(Chat);