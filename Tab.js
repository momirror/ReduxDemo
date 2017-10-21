import React from 'react';
import {StackNavigator,TabNavigator} from 'react-navigation';
import {AddScreen} from './AddScreen';
import {SubScreen} from './SubScreen';

const MainScreenNavigator = TabNavigator({
    AddScreen: {
        screen: AddScreen,
        navigationOptions: {
            tabBarLabel: '增加',
        }
    },
    SubScreen: {
        screen: SubScreen,
        navigationOptions: {
            tabBarLabel: '减少',
        }
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,

    tabBarOptions: {
        style: {
            height: 59
        },
        showIcon: false,
        activeBackgroundColor:'#CCFFFF',
        activeTintColor:'blue',
        inactiveBackgroundColor:'#CCFFFF',
        inactiveTintColor:'#aaa',
        showLabel:true,
    }
});

MainScreenNavigator.navigationOptions = {
    title: 'Redex Demo',
};

const APPNavigator = StackNavigator({
    Home: {
        screen: MainScreenNavigator,
        navigationOptions: {
            titleStyle: {
                alignSelf: 'center'
            },
        },
    },

});


export {APPNavigator};
