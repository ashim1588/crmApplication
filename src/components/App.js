/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import reducers from '../reducers/PeopleReducer';
import PeopleList from './PeopleList';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const Tab = createBottomTabNavigator();

function Dummy() {
  return (
    <View>
      <Text>Dummy</Text>
    </View>
  );
}

function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="home">
        <Tab.Screen name="home" component={Dummy} />
        <Tab.Screen name="auth" component={Dummy} />
        <Tab.Screen name="bucket" component={Dummy} />
        <Tab.Screen name="menu" component={Dummy} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
