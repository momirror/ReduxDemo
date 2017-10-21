import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {CommonStyle} from "./DemoStyle";

import {connect} from 'react-redux';

class AddScreen extends Component {

    add1 = () => {
        console.log('+1');
    }

    add100000000 = () => {
        console.log('+100000000');
    }


    render() {
        return (<View>
            <Text style={CommonStyle.result}>发前结果是:0</Text>

            <View style={CommonStyle.buttons}>
                <Button title={"加1"} onPress={this.add1}></Button>
                <Button title={"加100000000"} onPress={this.add100000000}/>
            </View>

        </View>);
    }
}



export {AddScreen};
