import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {CommonStyle} from "./DemoStyle";

class SubScreen extends Component {

    sub1 = ()=> {
        console.log('-1');
    }

    render() {
        return (<View>
            <Text style={CommonStyle.result}>发前结果是:0</Text>
            <View style={CommonStyle.buttons}>
                <Button title={"减1"} onPress={this.sub1}></Button>
            </View>
        </View>);
    }
}

export {SubScreen};
