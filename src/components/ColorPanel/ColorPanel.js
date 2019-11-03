import React, { Component } from 'react';
import firebase from 'firebase';
import { Sidebar, Menu, Divider, Button, Modal, Icon, Label, Segment } from 'semantic-ui-react';
import { SliderPicker } from 'react-color';

class ColorPanel extends Component {
  state = {
    modal: false,
    primary: "",
    secondary: "",
    user: this.props.currentUser,
    usersRef: firebase.database().ref('users')
  };

  handlePrimaryColor = color => this.setState({ primary: color.hex });

  handleSecondaryColor = color => this.setState({ secondary: color.hex });

  handleSaveColors = () => {
    if (this.state.primary && this.state.secondary) {
      this.saveColors(this.state.primary, this.state.secondary);
    }
  };

  saveColors = (primary, secondary) => {
    this.state.usersRef
      .child(`${this.state.user.uid}/chatcolors`)
      .push()
      .update({
        primary,
        secondary
      })
      .then(() => {
        console.log('Colors added');
        this.closeModal();
      })
      .catch(err => console.error(err));
  };

  openModal = () => this.setState({ modal: true });

  closeModal = () => this.setState({ modal: false });

  render() {
    const { modal, primary, secondary } = this.state;

    return (
      <Sidebar
        as={Menu}
        icon="labeled"
        inverted
        vertical
        visible
        width="very thin"
        style = {
          {
            background: "#008080"
          }
        }
      >
        <Divider />
        {/* <Button icon="add" size="small" onClick={this.openModal} color="black" inverted/> */}
        
        {/* Color Picker Modal */}
        <Modal basic open={modal} onClose={this.closeModal}>
          <Modal.Header>Choose Chat Colors</Modal.Header>
          <Modal.Content>
            <Segment inverted>
            <Label content="Choose Primary Color" />
              <SliderPicker
                color={primary}
                onChange={this.handlePrimaryColor}
              />
            </Segment>

            <Segment inverted>
            <Label content="Choose Secondary Color" />
              <SliderPicker
                color={secondary}
                onChange={this.handleSecondaryColor}
              />
            </Segment>
          </Modal.Content>
          <Modal.Actions>
            <Button color="teal" inverted onClick={this.handleSaveColors}>
              <Icon name="checkmark" /> Save Colors
            </Button>
            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="remove" /> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </Sidebar>
    );
  }
}

export default ColorPanel;