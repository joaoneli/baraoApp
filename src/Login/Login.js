import React, {Component} from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.LogoContainer}>
                    <Image
                        style={styles.Logo}
                        source={require('../../files/images/Logo_login.jpg')} />
                </View>
                <View>
                    <LoginForm />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    LogoContainer: {
        alignItems: 'center',
       // flexGrow: 1,
        justifyContent: 'center',
        marginTop: '35%',
    },
    Logo: {
        width: 180,
        height: 180,
    }
});