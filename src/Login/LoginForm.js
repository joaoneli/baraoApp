import React, {Component} from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <TextInput
                    placeholder="Login"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Senha"
                    style={styles.input}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.Cadastro}>
                    <Text style={styles.CadastroText}>Cadastre-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonLogin}>
                    <Text style={styles.ButtonLoginText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Container: {
        padding: 20,
        marginTop: '40%',
    },
    input: {
        height:48,
        marginLeft: '5%',
        marginRight:'5%',
        marginBottom:5,
        marginTop:5,
        paddingLeft:10,
        borderBottomColor: '#adad85',
        borderBottomWidth: 1,
    },
    ButtonLogin: {
        backgroundColor: 'green',
        paddingVertical: 15,
        height: 50,
        marginLeft: '10%',
        marginRight: '10%',
    },
    ButtonLoginText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
    },
    Cadastro: {
        marginTop: 1,
        paddingVertical: 15,
        marginLeft: '5%',
        marginRight: '5%',
    },
    CadastroText: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: '700',
    }
});