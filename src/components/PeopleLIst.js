import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import PeopleItem from './PeopleItem';
import PeopleDetails from './PeopleDetail';
import {Icon} from 'react-native-vector-icons/EvilIcons';
import {loadInitialContacts} from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  },
});

class PeopleList extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name={'archive'} size={50} color={tintColor} />
    ),
  };

  componentDidMount() {
    this.props.loadInitialContacts();
  }
  renderInitialView() {
    if (this.props.detailView === true) {
      return <PeopleDetails />;
    } else {
      return (
        <FlatList
          data={this.props.people}
          renderItem={({item}) => (
            <PeopleItem
              people={item}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        />
      );
    }
  }
  render() {
    return <View style={styles.container}>{this.renderInitialView()}</View>;
  }
}

const mapStateToProps = state => {
  return {people: state.people, detailView: state.detailView};
};

export default connect(mapStateToProps, {loadInitialContacts})(PeopleList);
