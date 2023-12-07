import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import _ from 'lodash';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import CompanyItem from './CompanyItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: '#e5e5e5',
  },
});

class CompanyList extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name={'archive'} size={50} color={tintColor} />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.companies}
          renderItem={({item}) => (
            <CompanyItem
              companies={item}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const people = state.people;
  const companies = _.chain(people)
    .groupBy('company')
    .map((value, key) => {
      return {
        company: key,
        names: value,
      };
    })
    .value();
  return {
    companies,
  };
};
export default connect(mapStateToProps)(CompanyList);
