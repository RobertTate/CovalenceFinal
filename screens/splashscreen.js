import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default class SplashScreen extends Component {

    // static navigationOptions = {
    //     header: "none"
    // }

    render() {
        return (
            <Container>
                <Content>
                    <Text>This is the splash page.</Text>
                    <Button onPress={() => this.props.navigation.navigate('SignIn')}>
                        <Text>Sign In</Text>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text>Sign Up</Text>
                    </Button>
                </Content>
            </Container>
        )
    }


}
