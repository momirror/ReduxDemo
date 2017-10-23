import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {CommonStyle} from "../sytles/CommonStyle";
import {minus1} from '../actions/actions';

class MinusScreen extends Component {

    minus1 = () => {
        console.log('-1');
        this.props.dispatch(minus1());
    }

    render() {
        return (<View>
            <Text style={CommonStyle.result}>当前结果是:{this.props.result}</Text>
            <View style={CommonStyle.buttons}>
                <Button title={"减1"} onPress={this.minus1}></Button>
            </View>
        </View>);
    }
}

const mapStateToProps = state => ({
    result: state.counter.result
})

export default connect(mapStateToProps)(MinusScreen);

