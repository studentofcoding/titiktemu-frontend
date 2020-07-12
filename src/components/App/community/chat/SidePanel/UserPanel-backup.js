import React, { Component } from 'react';
import { Grid, Header, Dropdown, Icon, Image } from 'semantic-ui-react';

class UserPanel extends Component {
  state = {
    user: this.props.currentUser
  };

  dropdownOptions = () => [
    {
      key:"user",
      text: (
        <span>Signed in as
          <strong>{this.state.user.displayName}</strong>
        </span>
      ),
      disabled: true
    },
    {
      key:"avatar",
      text: <span>Change Avatar</span>
    }
  ]

  render() {
    const { user } = this.state;

    return (
      < Grid style = {
        {
          background: "#276366"
        }
      } >
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            {/* Chat App Header */}
            <Header
              inverted
              float="left"
              as="h3"
            >
              <Icon name="chat" />
              <Header.Content>titiktemu Chat</Header.Content>
            </Header>
          </Grid.Row>
          {/* User Dropdown Option (for Log out etc) */}
          <Header style={{padding: "0.25em", margin: 20}} as="h4" inverted>
            <Dropdown
              trigger={
                <span>
                  <Image src={user.photoURL} avatar spaced="right" />
                  {user.displayName}
                </span>
              }
              options={this.dropdownOptions()} />
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;