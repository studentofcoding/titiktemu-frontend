import React from 'react';
// import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';

import Navbar from './Navbar';
import Navbarmobile from './Navbar-mobile';

import './chat.css';

const Chat = ({ currentUser, currentChannel, isPrivateChannel, topPosters }) => (
    <div>
        <div>
            <Navbar/>
            <Grid
                columns="equal"
                className="chat"
                style={
                {
                    background: "#fff"
                }
                }>
                <ColorPanel
                    key={currentUser && currentUser.name}
                    currentUser={currentUser}
                />
                <SidePanel key={currentUser && currentUser.uid} currentUser={currentUser} />

                <Grid.Column className={"chat-column"} style={{ marginLeft: 320, marginTop: 20 }}>
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
        <Navbarmobile />
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    currentChannel: state.channel.currentChannel,
    isPrivateChannel: state.channel.isPrivateChannel,
    topPosters: state.channel.topPosters
});
 
export default connect(mapStateToProps)(Chat);