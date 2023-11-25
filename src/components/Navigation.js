import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PeopleList from './PeopleLIst';
import AddPerson from './AddPerson';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CompanyList from './CompanyList';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="People"
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: '#80cbc4',
          showLabel: true,
          style: {
            backgroundColor: '#26a69a',
          },
        }}>
        <Tab.Screen name="People" component={PeopleList} />
        <Tab.Screen name="Add" component={AddPerson} />
        <Tab.Screen name="Company" component={CompanyList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
