import React from "react";
import { Grid, Form, Segment, Button, Header, Message } from 'semantic-ui-react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
// Import md5 for providing unique value to User Avatar
import md5 from 'md5';
import './registerlogin.css';

const db = firebase.database()

class Register extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        errors: [],
        loading: false,
        usersRef: db.ref('users')
        // usersRef: firebase.firestore().collection('users').get()
    };

    //function to check wether the form is valid
    formisValid = () => {
        let errors = [];
        let error;

        if (this.formisEmpty(this.state)) {
            //call an error
            error = { message: "Fill in all fields" };
            this.setState({ errors: errors.concat(error) });
            return false;
        } else if (!this.passwordisValid(this.state)) {
            //throw error if password is !Valid (not valid)
            error = { message: "Make sure Password have 6 Character, and equal to Password Confirmation" };
            this.setState({ errors: errors.concat(error) });
            return false;
        } else {
            //if form and password valid
            return true;
        }
    };

    formisEmpty = ({ username, email, password, passwordConfirmation }) => {
        return !username.length || !email.length || !password.length || !passwordConfirmation.length;
    };

    passwordisValid = ({ password, passwordConfirmation }) => {
        //if the password not more than 6 char
        if (password.length < 6 || passwordConfirmation.length < 6) {
            return false;
            //if the password not equal to
        } else if (password !== passwordConfirmation) {
            return false;
        } else {
            return true;
        }
    };

    dispalyErrors = errors =>
        errors.map((error, i) => <p key={i}>{error.message}</p>);

    handleUserInput = input => {
        this.setState({ [input.target.name]: input.target.value });
    };

    handleSubmit = input => {
        input.preventDefault();
        if (this.formisValid()) {
            this.setState({ errors: [], loading: true });
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(createdUser => {
                    console.log(createdUser);
                    createdUser.user
                        .updateProfile({
                            displayName: this.state.username,
                            photoURL: `http://gravatar.com/avatar/${md5(
                                createdUser.user.email
                            )}?d=identicon`
                        })
                        .then(() => {
                            this.saveUser(createdUser).then(() => {
                                console.log("user saved");
                            });
                        })
                        .catch(err => {
                            console.error(err);
                            this.setState({
                                errors: this.state.errors.concat(err),
                                loading: false
                            });
                        });
                })
                .catch(err => {
                    console.error(err);
                    this.setState({
                        errors: this.state.errors.concat(err),
                        loading: false
                    });
                });
        }
    };

    saveUser = createdUser => {
        return this.state.usersRef.child(createdUser.user.uid).set({
            name: createdUser.user.displayName,
            avatar: createdUser.user.photoURL
        });
    };

    handleInputError = (errors, inputName) => {
        return errors.some(error =>
            error.message.toLowerCase().includes(inputName)
        )
            ? 'error'
            : '';
    };

    render() {
        const { username, email, password, passwordConfirmation, errors, loading } = this.state;

        return (
            <Grid textAlign="center" verticalAlign="middle" className="registerlogin">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <img
                          className="logogram"
                          src="Images/logogram.png"
                          alt="titiktemu"
                    />
                    <Header as="h1" icon color="black" textAlign="center" 
                    style={{marginBottom:"20px", marginTop:"10px"}}>
                        Join titiktemu
                    </Header>

                    {/* Form for Register */}
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Input
                                fluid
                                name="username"
                                value={username}
                                icon="user"
                                iconPosition="left"
                                placeholder="Username / Full Name"
                                onChange={this.handleUserInput}
                                type="text"
                            />

                            <Form.Input
                                fluid
                                name="email"
                                value={email}
                                icon="mail"
                                iconPosition="left"
                                placeholder="Email Address"
                                onChange={this.handleUserInput}
                                className={this.handleInputError(errors, 'email')}
                                type="email"
                            />

                            <Form.Input
                                fluid
                                name="password"
                                value={password}
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                onChange={this.handleUserInput}
                                className={this.handleInputError(errors, 'password')}
                                type="password"
                            />

                            <Form.Input
                                fluid
                                name="passwordConfirmation"
                                value={passwordConfirmation}
                                icon="repeat"
                                iconPosition="left"
                                placeholder="Passwrod Confirmation"
                                onChange={this.handleUserInput}
                                className={this.handleInputError(errors, 'password')}
                                type="password"
                            />

                            <Button
                                disabled={loading}
                                className={loading ? 'loading' : ''}
                                style={{background:"#008080", color:"#fff"}}
                                fluid
                                size="medium">
                                Process my account
                            </Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.dispalyErrors(errors)}
                        </Message>
                    )}
                    <Message style={{fontSize:"14px"}}>
                        Already a user? <Link to="/login">Login here!</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Register;