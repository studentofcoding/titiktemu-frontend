import React, { Component } from 'react';
import { Segment, Header, Input, Icon } from 'semantic-ui-react';
import './messages.css';


class MessagesHeader extends Component {
  render() {
    const { channelName, numUniqueUsers, handleSearchChange, searchLoading, isPrivateChannel, handleFavorite, isChannelFavorite } = this.props;

    return (
      <Segment clearing>
        {/* Channel Title */}
        <Header fluid="true" as="h2" floated="left" sytle={{ marginBottom: 0 }}>
          <span>
            { channelName }
            {" "}
            {!isPrivateChannel && (
              <Icon
                onClick={handleFavorite}
                name={isChannelFavorite
                  ? 'star'
                  : 'star outline'}
                color={isChannelFavorite
                  ? 'yellow'
                  : 'black'}
              />
              )}
          </span>
          {/* This is for Showing how much user in the active channel */}
          <Header.Subheader>
            {numUniqueUsers}
          </Header.Subheader>
        </Header>

        {/* Channel Search Input */}
        <Header floated="right">
          <Input
            loading={searchLoading}
            onChange={handleSearchChange}
            size="small"
            icon="search"
            name="searchTerm"
            placeholder="Search Messages"
          />
        </Header>
      </Segment>
    );
  }
}

export default MessagesHeader;