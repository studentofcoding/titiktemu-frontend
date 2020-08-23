import React, { Component } from 'react';
import { Segment, Comment } from 'semantic-ui-react';
import { connect } from 'react-redux';
/* For next Heros User adding the value here */
import { setTopPosters } from '../actions';

import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm';
import Message from './Message';
import firebase from 'firebase';

/* sytle for messages */
import './messages.css';

/* Typing */
import '../Messages/Typing.css';
import Typing from './Typing';

/* Skeleton */
import SkeletonChat from './SkeletonChat';

const db = firebase.database()
class Messages extends Component {
  state = {
    privateChannel: this.props.isPrivateChannel,
    messages: [],
    messagesLoading: true,
    channel: this.props.currentChannel,
    isChannelFavorite: false,
    user: this.props.currentUser,
    numUniqueUsers: '',
    searchTerm: '',
    searchLoading: false,
    searchResults: [],
    typingUsers: [],
    usersRef: db.ref('users'),
    typingRef: db.ref('chat/userTyping'),
    privateMessagesRef: db.ref('chat/privateMessages'),
    messagesRef: db.ref('chat/messages'),
    connectedRef: db.ref('chat/info/connected')
  };

  componentDidMount() {
    const { channel, user } = this.state;

    if (channel && user) {
      this.addListeners(channel.id);
      this.addUsersFavListeners(channel.id, user.uid);
    }
  }

  /* Autoscroll new messages */
  componentDidUpdate(prevProps, prevState) {
    if (this.newMessageEnd) {
      this.scrollToBottom();
    }
  }

  scrollToBottom = () => {
    this.newMessageEnd.scrollIntoView({ behavior: 'smooth' });
  }

  addListeners = channelId => {
    this.addMessageListener(channelId);
    this.addTypingListeners(channelId);
  };

  addTypingListeners = channelId => {
    let typingUsers = [];
    this.state.typingRef.child(channelId).on('child_added', snap => {
      if (snap.key !== this.state.user.uid) {
        typingUsers = typingUsers.concat({
          id: snap.key,
          name: snap.val()
        })
        this.setState({ typingUsers });
      }
    })

    this.state.typingRef.child(channelId).on('child_removed', snap => {
      const index = typingUsers.findIndex(user => user.id === snap.key);
      if (index !== -1) {
        typingUsers = typingUsers.filter(user => user.id !== snap.key);
        this.setState({ typingUsers });
      }
    })

    this.state.connectedRef.on('value', snap => {
      if (snap.val() === true) {
        this.state.typingRef
          .child(channelId)
          .child(this.state.user.uid)
          .onDisconnect()
          .remove(err => {
            if (err !== null) {
              console.error(err);
          }
        })
      }
    })
  }

  /* Add this for the most liked post (Hero) */
  addMessageListener = channelId => {
    let loadedMessages = [];
    const ref = this.getMessagesRef();
    ref.child(channelId).on('child_added', snap => {
      loadedMessages.push(snap.val());
      this.setState({
        messages: loadedMessages,
        messagesLoading: false
    });
      this.countUniqueUsers(loadedMessages);
      this.setTopPosters(loadedMessages);
    });
  };

  addUsersFavListeners = (channelId, userId) => {
    this.state.usersRef
      .child(userId)
      .child('favorite')
      .once('value')
      .then(data => {
        if (data.val() !== null) {
          const channelIds = Object.keys(data.val());
          const prevFav = channelIds.includes(channelId);
          this.setState({ isChannelFavorite: prevFav });
      }
    })
  }

  getMessagesRef = () => {
    const { messagesRef, privateMessagesRef, privateChannel } = this.state;
    return privateChannel
      ? privateMessagesRef : messagesRef;
  };

  handleFavorite = () => {
    this.setState(prevState => ({
      isChannelFavorite: !prevState.isChannelFavorite
    }), () => this.favChannel());
  }

  favChannel = () => {
    if (this.state.isChannelFavorite) {
      this.state.usersRef
        .update({
          [this.state.channel.id]: {
            name: this.state.channel.name,
            details: this.state.channel.details,
            createdBy: {
              name: this.state.channel.createdBy.name,
              avatar: this.state.channel.createdBy.avatar
            }
          }
        });
    } else {
      this.state.usersRef
        .child(`${this.state.user.uid}/favorite`)
        .child(this.state.channel.id)
        .remove(err => {
          if (err !== null) {
            console.error(err);
          }
        });
    }
  };

  handleSearchChange = event => {
    this.setState(
      {
        searchTerm: event.target.value,
        searchLoading: true
      },
      () => this.handleSearchMessages()
    );
  };

  handleSearchMessages = () => {
    const channelMessages = [...this.state.messages];
    const regex = new RegExp(this.state.searchTerm, "gi");
    const searchResults = channelMessages.reduce((acc, message) => {
      if (
        (message.content && message.content.match(regex)) ||
        message.user.name.match(regex)
      ) {
        acc.push(message);
      }
      return acc;
    }, []);
    this.setState({ searchResults });
    setTimeout(() => this.setState({ searchLoading: false }), 1000);
  };

  countUniqueUsers = messages => {
    const uniqueUsers = messages.reduce((acc, message) => {
      if (!acc.includes(message.user.name)) {
        acc.push(message.user.name);
      }
      return acc;
    }, []);
    const plural = uniqueUsers.length > 1 || uniqueUsers.length === 0;
    const numUniqueUsers = `${uniqueUsers.length} user${plural ? "s" : ""}`;
    this.setState({
      numUniqueUsers
    });
  };

  setTopPosters = messages => {
    let topPosters = messages.reduce((acc, message) => {
      if (message.user.name in acc) {
        acc[message.user.name].count += 1;
      } else {
        acc[message.user.name] = {
          avatar: message.user.avatar,
          count: 1
        };
      }
      return acc;
    }, {});
    this.props.setTopPosters(topPosters);
  };

  displayMessages = messages =>
    messages.length > 0 &&
    messages.map(message => (
      <Message
        key={message.timestamp}
        message={message}
        user={this.state.user}
      />
    ));
  
  displayChannelName = channel => {
    return channel
      ? `${this.state.privateChannel ? '@' : '#'}${channel.name}`
      : '';
  };

  displayTypingUsers = users => 
    users.length > 0 && users.map(user => (
      <div className="user_typing" style={{ display: "flex", alignItems: "center" }}
        key={user.id}
      >
        <Typing /> <span className="user__typing">{user.name} is typing</span>
      </div>
    ));
  
  displayMessageSkeleton = loading => 
    loading ? (
      <React.Fragment>
        {[...Array(15)].map((_, i) => (
          <SkeletonChat key={i} />
        ))}
      </React.Fragment>
    ) : null;

  render() {
    const {
      messagesRef,
      messages,
      channel,
      user,
      numUniqueUsers,
      searchTerm,
      searchResults,
      searchLoading,
      privateChannel,
      isChannelFavorite,
      typingUsers,
      messagesLoading
    } = this.state;

    return (
      <React.Fragment>
        <MessagesHeader
          channelName={this.displayChannelName(channel)}
          numUniqueUsers={numUniqueUsers}
          handleSearchChange={this.handleSearchChange}
          searchLoading={searchLoading}
          privateChannel={privateChannel}
          isChannelFavorite={isChannelFavorite}
          handleFavorite={this.handleFavorite}
          style={{ height: "200px !important" }}
        />
        
        <Segment id="message-container" style={{ width: "800" }}>
          {/* Checking if the search term is active */}
          <Comment.Group className="messages">
            {this.displayMessageSkeleton(messagesLoading)}
            {searchTerm
              ? this.displayMessages(searchResults)
              : this.displayMessages(messages)}
            {this.displayTypingUsers(typingUsers)}
            <div ref={node => (this.newMessageEnd = node)}></div>
          </Comment.Group>
        </Segment>

        <MessageForm
          messagesRef={messagesRef}
          currentChannel={channel}
          currentUser={user}
          isPrivateChannel={privateChannel}
          getMessagesRef={this.getMessagesRef}
        />
      </React.Fragment>
    );
  }
}

export default connect(null, { setTopPosters })(Messages);