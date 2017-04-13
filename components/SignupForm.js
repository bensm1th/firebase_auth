import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-ce89b.cloudfunctions.net'

export default class SignupForm extends Component {
    
    state = { phone: '' }
    
    // handleSubmit = async () => {
    //     const options = { phone: this.state.phone }
    //     try {
    //         await axios.post(`${ROOT_URL}/createUser`, options)
    //         await axios.post(`${ROOT_URL}/requestOneTimePassword`, options)
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    handleSubmit = () => {
        const options = { phone: this.state.phone }
        axios.post(`${ROOT_URL}/createUser`, options)
            .then(() => {
                axios.post(`${ROOT_URL}/requestOneTimePassword`, options)
            })
    }

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel> Enter Phone Number </FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                     />
                </View>
                <Button 
                    onPress={this.handleSubmit}
                    title='submit' 
                />
            </View>
        );
    }
}
