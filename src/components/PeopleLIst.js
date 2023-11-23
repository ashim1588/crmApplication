import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import PeopleItem from './PeopleItem';

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
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.people}
          renderItem={({item}) => <PeopleItem people={item} />}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {people: state.people};
};

export default connect(mapStateToProps)(PeopleList);
