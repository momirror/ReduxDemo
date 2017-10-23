import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {CommonStyle} from "../sytles/CommonStyle";
import {add1, add100000000} from '../actions/actions';
import {connect} from 'react-redux';

class AddScreen extends Component {

    add1 = () => {
        this.props.dispatch(add1());
    }

    asnyAdd = async () => {
        this.props.dispatch(function (dispatch) {
            setTimeout(() => {
                dispatch(add100000000())
            }, 3000);

        });

    }


    render() {
        return (<View>
            <Text style={CommonStyle.result}>当前结果是:{this.props.result}</Text>
            <View style={CommonStyle.buttons}>
                <Button title={"加1"} onPress={this.add1}></Button>
                <Button title={"异步加100000000"} onPress={this.asnyAdd}/>
            </View>

        </View>);
    }
}


//一定要进行redux和componet的绑定，否则this.props.dispatch等相关方法无法调用。

const mapStateToProps = state => ({
    result: state.counter.result //key 将会绑定到this.props中,值是在reducer中定义的回调函数 。
})

export default connect(mapStateToProps)(AddScreen);

