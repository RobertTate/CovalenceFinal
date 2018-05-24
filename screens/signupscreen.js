import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Title, Content, Form, Item, Input, Label, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet, View, Dimensions } from 'react-native';
import App from '../App';

import * as userService from '../services/users';


export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            feedbackMessage: '',
            name: '',
            email: '',
            username: '',
            password: ''
        };
    }

    signup() {
        userService.newUser(this.state.name, this.state.email, this.state.username, this.state.password)
            .then(() => {
               return userService.login(this.state.email, this.state.password)
            }).then(() => {
                this.props.navigation.navigate('Map', {});
            })
            .catch((err) => {
                if (err.message) {
                    this.setState({ feedbackMessage: err.message });
                }
            });
    }


    render() {

        return (
            <Container>
                <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Enter Your Name</Label>
                            <Input onChangeText={(text) => this.setState({name: text})} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Enter Your Email</Label>
                            <Input onChangeText={(text) => this.setState({email: text})}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Choose Your Username</Label>
                            <Input onChangeText={(text) => this.setState({username: text})}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Select A Password</Label>
                            <Input onChangeText={(text) => this.setState({password: text})}/>
                        </Item>
                    </Form>
                    <Button onPress={() => this.signup()} block style={{ margin: 15, marginTop: 50 }}>
                        <Text>SIGN UP</Text>
                    </Button>
                </Content>
            </Container>
        )
    }


}
