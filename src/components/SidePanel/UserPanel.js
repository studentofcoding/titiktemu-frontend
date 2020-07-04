import React, { Component } from 'react';
import firebase from 'firebase';
import { Grid, Header, Dropdown, Image, Modal, Input, Button, Icon } from 'semantic-ui-react';

/* Avatar Editor */
import AvatarEditor from 'react-avatar-editor';

import './UserPanel.css'

class UserPanel extends Component {
  state = {
    user: this.props.currentUser,
    modal: false,
    previewImage: '',
    croppedImage: '',
    blob: '',
    uploadedCroppedImage: '',
    storageRef: firebase.storage().ref(),
    userRef: firebase.auth().currentUser,
    usersRef: firebase.database().ref('users'),
    metadata: {
      contentType: 'image/jpeg'
    }
  };

  openModal = () => this.setState({ modal: true });

  closeModal = () => this.setState({ modal: false });

  dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>Signed in as
          <strong>{this.state.user.displayName}</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: "avatar",
      text: <span onClick={this.openModal}>Change Avatar</span>
    }
  ];

  uploadCroppedImage = () => {
    const { storageRef, userRef, blob, metadata } = this.state;
    
    storageRef
      .child(`avatars/user-${userRef.uid}`)
      .put(blob, metadata)
      .then(snap => {
        snap.ref.getDownloadURL().then(downloadURL => {
          this.setState({ uploadedCroppedImage: downloadURL }, () =>
            this.changeAvatar()
          );
        });
      });
  };

  changeAvatar = () => {
    this.state.userRef
      .updateProfile({
        photoURL: this.state.uploadedCroppedImage
      })
      .then(() => {
        console.log('PhotoURL Updated!');
        this.closeModal();
      })
      .catch(err => {
        console.error(err);
      });
    
    this.state.usersRef
      .child(this.state.user.uid)
      .update({ avatar: this.state.uploadedCroppedImage })
      .then(() => {
        console.log('User avatar updated');
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleChange = event => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        this.setState({ previewImage: reader.result });
      });
    }
  };

  handleCropImage = () => {
    if (this.avatarEditor) {
      this.avatarEditor.getImageScaledToCanvas().toBlob(blob => {
        let imageUrl = URL.createObjectURL(blob);
        this.setState({
          croppedImage: imageUrl,
          blob
        });
      });
    }
  }

  render() {
    const { user, modal, previewImage, croppedImage } = this.state;

    return (
      <Grid>
        <Grid.Column>
          {/* Chat App Header */}
          {/* <Grid.Row style={{ padding: "1.2em", marginLeft: 40, marginTop: 20 }}>
            <Header
              inverted
              float="left"
              as="h3"
            >
              <Icon name="chat" />
              <Header.Content>Forum</Header.Content>
            </Header>
          </Grid.Row> */}
          {/* User Dropdown Option (for Log out etc) */}
          <Header style={{ padding: "0.25em", marginBottom: 45, marginTop: 45, marginLeft: 25 }} as="h3" inverted>
            <Dropdown
              trigger={
                <span>
                  <Image src={user.photoURL} avatar spaced="right" />
                  {user.displayName}
                </span>
              }
              options={this.dropdownOptions()} />
          </Header>

          {/* Change User Avatar Modal */}
          <Modal basic open={modal} onClose={this.closeModal}>
            <Modal.Header>Change Avatar</Modal.Header>
            <Modal.Content>
              <Input
                onChange={this.handleChange}
                fluid
                type="file"
                label="Insert New Avatar"
                name="previewImage"
              />
              <Grid
                centered
                stackable
                columns={2}
              >
                <Grid.Row centered>
                  <Grid.Column className="ui center aligned grid">
                    {previewImage && (
                      <AvatarEditor
                        ref={node => (this.avatarEditor = node)}
                        image={previewImage}
                        width={180}
                        height={180}
                        border={90}
                        scale={1.2}
                      />
                    )}
                  </Grid.Column>
                  <Grid.Column>
                    {croppedImage && (
                      <Image
                        style={{ margin: '3.5em auto' }}
                        width={100}
                        height={100}
                        src={croppedImage}
                      />
                    )}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Content>
            <Modal.Actions>
              {croppedImage && <Button color="teal"
              onClick={this.uploadCroppedImage}
              >
                <Icon name="image" /> Change Avatar
              </Button>}
              <Button color="teal" inverted onClick={this.handleCropImage}>
                <Icon name="save" /> Preview Avatar
              </Button>
              <Button color="red" onClick={this.closeModal}>
                <Icon name="remove" /> Cancel
              </Button>
            </Modal.Actions>
          </Modal>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;