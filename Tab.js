import React from 'react';
import {StackNavigator,TabNavigator} from 'react-navigation';
import AddScreen from './screens/AddScreen';
import MinusScreen from './screens/MinusScreen';

const MainScreenNavigator = TabNavigator({
    AddScreen: {
        screen: AddScreen,
        navigationOptions: {
            tabBarLabel: '增加',
        }
    },
    MinusScreen: {
        screen: MinusScreen,
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
            height: 59,
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
    title: 'Redux Demo',
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
