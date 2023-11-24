import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="People" component={PeopleList} />
      <Tab.Screen name="Add" component={AddPerson} />
      <Tab.Screen name="Company" component={CompanyList} />
    </Tab.Navigator>
  );
}
//   {
//     initialRouteName: 'People',
//     tabBarOptions: {
//       activeTintColor: 'white',
//       inactiveTintColor: '#80cbc4',
//       showLabel: false,
//       showIcon: true,
//       style: {
//         backgroundColor: '#26a69a',
//       },
//     },
//   },
// );

export default TabNavigator;
