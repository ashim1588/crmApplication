import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getTheme} from 'react-native-material-kit';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions/index';

const theme = getTheme();

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  title: {
    top: 20,
    left: 80,
    fontSize: 24,
  },
  image: {
    height: 120,
  },
  action: {
    backgroundColor: 'black',
    color: 'white',
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 0,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
});

const PeopleItem = props => {
  return (
    <View style={[theme.cardStyle, styles.card]}>
      <Image
        source={require('../images/background.jpg')}
        style={[theme.cardImageStyle, styles.image]}
      />
      <Icon name={'user'} size={100} style={styles.icon} />
      <Text style={[theme.cardTitleStyle, styles.title]}>
        {props.people.firstName} {props.people.lastName}
      </Text>
      <Text style={[theme.cardActionStyle, styles.action]}>
        {props.people.company}
      </Text>
    </View>
  );
};

export default connect(null, actions)(PeopleItem);
